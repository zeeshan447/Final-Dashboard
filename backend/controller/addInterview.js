const pool = require("../client");
const moment = require("moment");
const InterviewList = async (req, res) => {
  try {
    let users = await pool.query(`select * from interviewer_status`);
    console.log("users", users.rows);
    //pool.end()
    res.json({ statusCode: 200, users: users.rows });
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

const interviewSchedule = async (req, res) => {
  try {
    let schedule_data = req.body;

    for (const data of schedule_data) {
      let promises = [];

      let { rows } = await pool.query(
        `insert into "interviewer_status"

                (candidate_job_maping_id, scheduled_time,

                schedule_date , duration, location,interview_type, stage)

                values ($1, $2, $3, $4,$5,$6,$7)

                RETURNING interviewer_status_id`,

        [
          data.candidate_job_maping_id,

          data.scheduled_time,

          data.schedule_date,

          data.duration,

          data.location,
          data.interview_type,

          data.stage,
        ]
      );

      console.log("rows", rows);

      data.user_id.map((id) => {
        promises.push(
          pool.query(
            `insert into userinterview_maping

              (user_id, interviewer_status_id)

              values ($1, $2)`,

            [id, rows[0].interviewer_status_id]
          )
        );
      });

      await Promise.all(promises);
    }

    //pool.end()

    res.send({ statusCode: 201, message: "Interview scheduled successfully" });
  } catch (err) {
    console.error(err.message);

    res.json({ statusCode: 300, message: err.message });
  }
};

const updateFeedback = async (req, res) => {
  try {
    const interviewer_status_id = req.params.interviewer_status_id;
    const feedback = req.body.feedback;
    const status = req.body.status;
    const db = req.body;
    console.log(db);
    let interviewerFeedback = await pool.query(
      `UPDATE "interviewer_status" set feedback = $1, status= $2 
        where interviewer_status_id = $3`,
      [feedback, status, interviewer_status_id]
    );
    console.log(interviewerFeedback);
    //pool.end()
    res.json({ statusCode: 201, message: "updated Successfuly" });
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

const userInterviewList = async (req, res) => {
  try {
    let myinterviewerList = await pool.query(`select c.candidate_name, is2.*
      from
        interviewer_status is2
      join userinterview_maping um on 
      um.interviewer_status_id = is2.interviewer_status_id 
      join users u on u.user_id =um.user_id 
      join candidate_job_maping cjm on cjm.candidate_job_maping_id = is2.candidate_job_maping_id 
      join candidate c on c.candidate_id =cjm.candidate_id 
      where
        um.user_id =${req.params.user_id} `);
    console.log("users", myinterviewerList.rows);
    const interviewStatus = {
      feedbackToComplete: [],
      upcomingInterview: [],
      overDueInterview: [],
      completedInterview: [],
    };
    myinterviewerList.rows.map((data) => {
      let sched_date = moment(data.schedule_date.split(" ")[0]);
      console.log(moment().diff(sched_date, "days"));
      if (data.status == "COMPLETE" && !data.feedback) {
        interviewStatus.feedbackToComplete.push(data);
      } else if (data.status == "COMPLETE") {
        interviewStatus.completedInterview.push(data);
      } else if (
        data.status == "PENDING" &&
        moment().diff(sched_date, "days") > 0
      ) {
        interviewStatus.overDueInterview.push(data);
      } else if (
        data.status == "PENDING" &&
        moment().diff(sched_date, "days") <= 0
      ) {
        interviewStatus.upcomingInterview.push(data);
      }
    });
    //pool.end()
    res.json({ statusCode: 200, data: interviewStatus });
  } catch (err) {
    console.error(err.message);
    res.json({ statusCode: 300, message: err.message });
  }
};
///
const candidateInterviewList = async (req, res) => {
  try {
    let CaninterviewerList = await pool.query(`select c.candidate_name, is2.* ,

      array_agg(jsonb_build_object('userId', um.user_id, 'userName', u.user_name)) as interviewer

    from

      interviewer_status is2

    join userinterview_maping um on

    um.interviewer_status_id = is2.interviewer_status_id

    join users u on u.user_id =um.user_id

    join candidate_job_maping cjm on cjm.candidate_job_maping_id = is2.candidate_job_maping_id

    join candidate c on c.candidate_id =cjm.candidate_id

    where

      c.candidate_id= ${req.params.candidate_id}

      group by is2.interviewer_status_id , c.candidate_name`);

    console.log("candidate interview", CaninterviewerList.rows);

    //pool.end()

    res.json({ statusCode: 200, scheduleInterview: CaninterviewerList.rows });
  } catch (err) {
    console.error(err.message);

    res.json({ statusCode: 300, message: err.message });
  }
};
///
const scheduleReleased = async function (req, res) {
  try {
    let interviewDelete = await pool.query(
      `Delete from interviewer_status where interviewer_status_id=${req.params.interviewer_status_id}`
    );
    res.status(200).json({
      msg: "Interview Deleted",
    });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
    });
  }
};

module.exports = {
  InterviewList,
  interviewSchedule,
  updateFeedback,
  userInterviewList,
  candidateInterviewList,
  scheduleReleased,
};
