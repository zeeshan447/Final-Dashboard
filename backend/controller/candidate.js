const pool = require("../client");
const candidatesInfo = async (req, res) => {
  try {
    console.log("chck");
    let candidatedata =
      await pool.query(`select c.candidate_id , candidate_name , address, notes, prev_company, email,
            array_agg(jsonb_build_object('job_id', j.job_id ,'job_title', j.job_title, 'stage', cjm.stage)) as jobs
            from candidate c 
            join candidate_job_maping cjm on cjm.candidate_id = c.candidate_id
            join job j on j.job_id = cjm.job_id 
            group by c.candidate_id `);
    console.log(candidatedata);
    res.send({ statusCode: 200, candidates: candidatedata.rows });
  } catch (err) {
    console.error(err.message);
    res.json({ statusCode: 300, message: err.message });
  }
};

const candidateJobStatus = async (req, res) => {
  try {
    console.log(req.body);
    const candidate_id = req.body.candidate_id;
    const job_id = req.body.job_id;
    const stage = req.body.stage;
    let candidateDetail = await pool.query(`insert into "candidate_job_maping"
         (candidate_id, job_id, stage  )
         values ('${candidate_id}', ${job_id}, '${stage}')`);
    console.log("candidate_status : ", candidate_id.rows);
    //pool.end()
    res.send({ statusCode: 201, message: "Added Successfuly" });
  } catch (err) {
    console.error(err.message);
    res.json({ statusCode: 300, job: err.message });
  }
};

/////
const candidateInitial = async (req, res) => {
  // console.log("req.query :>> ", req.query);
  let stage = req.query.stage;
  let job_id = req.query.job_id;
  let search = req.query.search;
  try {
    let candidateDetail = await pool.query(
      `SELECT
    c.candidate_name,
    cjm.candidate_job_maping_id,
    c.candidate_id,
    cjm.stage,
    c.prev_company ,
    j.job_id,
    j.job_title,
    j.job_createdby,
    c.urls,
    c.notes,
    c.address,
    c.cv,
    c.created_at,
    c.updated_at,
    c.HiringManager,
    c.phone,
    c.email
      FROM
    candidate c
  JOIN candidate_job_maping cjm ON
    c.candidate_id = cjm.candidate_id
  JOIN job j ON
    j.job_id = cjm.job_id 
    where 1=1
    ${stage ? ` and cjm.stage = '${stage}'` : ""}
    ${search ? ` and c.candidate_name ilike '%${search}%'` : ""}
    ${job_id ? ` and j.job_id = '${job_id}'` : ""}`
    );

    // console.log("candidate_status : ", candidateDetail.rows);
    //pool.end()
    res.send({
      statusCode: 200,
      count: candidateDetail.rows.length,
      data: candidateDetail.rows,
    });
  } catch (err) {
    console.log("ERRROR IN CANDIDATE");
    res.json({ statusCode: 300, job: err.message });
    console.error(err.message);
  }
};

//

// const candidatePH = async (req, res) => {
//   try {
//     let candidateDetail = await pool.query(`SELECT
//     c.candidate_name,
//     c.candidate_id,
//     c.prev_company ,
//     j.job_title,
//     c.address,
//     c.created_at,
//     c.urls,
//     c.cv,
//     c.notes,
//     c.updated_at,
//     c.HiringManager,
//     cjm.job_id,
//     cjm.stage  FROM
//     candidate c
//   JOIN candidate_job_maping cjm ON
//     c.candidate_id = cjm.candidate_id
//   JOIN job j ON
//     j.job_id = cjm.job_id
//   WHERE
//     cjm.stage = 'PHONE SCREEN'  `);

//     console.log("candidate_status : ", candidateDetail.rows);
//     //pool.end()
//     res.send({
//       statusCode: 200,
//       count: candidateDetail.rows.length,
//       data: candidateDetail.rows,
//     });
//   } catch (err) {
//     console.error(err.message);
//     return err;
//   }
// };
// ////////////////////

// const candidateR = async (req, res) => {
//   try {
//     let candidateDetail = await pool.query(`SELECT
//     c.candidate_name,
//     c.candidate_id,
//     c.prev_company ,
//     j.job_title,
//     c.urls,
//     c.cv,
//     c.address,
//     c.notes,
//     c.created_at,
//     c.updated_at,
//     c.HiringManager,
//     cjm.job_id,
//     cjm.stage  FROM
//     candidate c
//   JOIN candidate_job_maping cjm ON
//     c.candidate_id = cjm.candidate_id
//   JOIN job j ON
//     j.job_id = cjm.job_id
//   WHERE
//     cjm.stage = 'REVIEW'  `);

//     console.log("candidate_status : ", candidateDetail.rows);
//     //pool.end()
//     res.send({
//       statusCode: 200,
//       count: candidateDetail.rows.length,
//       data: candidateDetail.rows,
//     });
//   } catch (err) {
//     console.error(err.message);
//     return err;
//   }
// };

// ///

// const candidateFR = async (req, res) => {
//   try {
//     let candidateDetail = await pool.query(`SELECT
//     c.candidate_name,
//     c.candidate_id,
//     c.prev_company ,
//     j.job_title,
//     c.address,
//     c.notes,
//     c.created_at,
//     c.urls,
//     c.cv,
//     c.updated_at,
//     c.HiringManager,
//     cjm.job_id,
//     cjm.stage  FROM
//     candidate c
//   JOIN candidate_job_maping cjm ON
//     c.candidate_id = cjm.candidate_id
//   JOIN job j ON
//     j.job_id = cjm.job_id
//   WHERE
//     cjm.stage = 'FIRST ROUND'  `);

//     console.log("candidate_status : ", candidateDetail.rows);
//     //pool.end()
//     res.send({
//       statusCode: 200,
//       count: candidateDetail.rows.length,
//       data: candidateDetail.rows,
//     });
//   } catch (err) {
//     console.error(err.message);
//     return err;
//   }
// };
// ///

// const candidateSR = async (req, res) => {
//   try {
//     let candidateDetail = await pool.query(`SELECT
//     c.candidate_name,
//     c.candidate_id,
//     c.prev_company ,
//     j.job_title,
//     c.urls,
//     c.address,
//     c.cv,
//     c.notes,
//     c.created_at,
//     c.updated_at,
//     c.HiringManager,
//     cjm.job_id,
//     cjm.stage   FROM
//     candidate c
//   JOIN candidate_job_maping cjm ON
//     c.candidate_id = cjm.candidate_id
//   JOIN job j ON
//     j.job_id = cjm.job_id
//   WHERE
//     cjm.stage = 'SECOND ROUND'  `);

//     console.log("candidate_status : ", candidateDetail.rows);
//     //pool.end()
//     res.send({
//       statusCode: 200,
//       count: candidateDetail.rows.length,
//       data: candidateDetail.rows,
//     });
//   } catch (err) {
//     console.error(err.message);
//     return err;
//   }
// };
// ////

// const candidateTR = async (req, res) => {
//   try {
//     let candidateDetail = await pool.query(`SELECT
//     c.candidate_name,
//     c.candidate_id,
//     c.prev_company ,
//     j.job_title,
//     c.created_at,
//     c.address,
//     c.urls,
//     c.cv,
//     c.notes,
//     c.updated_at,
//     c.HiringManager,
//     cjm.job_id,
//     cjm.stage
//   FROM
//     candidate c
//   JOIN candidate_job_maping cjm ON
//     c.candidate_id = cjm.candidate_id
//   JOIN job j ON
//     j.job_id = cjm.job_id
//   WHERE
//     cjm.stage = 'OFFERED'  `);

//     console.log("candidate_status : ", candidateDetail.rows);
//     //pool.end()
//     res.send({
//       statusCode: 200,
//       count: candidateDetail.rows.length,
//       data: candidateDetail.rows,
//     });
//   } catch (err) {
//     console.error(err.message);
//     return err;
//   }
// };
// //

// const candidateHR = async (req, res) => {
//   try {
//     let candidateDetail = await pool.query(`SELECT
//     c.candidate_name,
//     c.candidate_id,
//     c.prev_company ,
//     j.job_title,
//     c.urls,
//     c.address,
//     c.cv,
//     c.notes,
//     c.created_at,
//     c.updated_at,
//     c.HiringManager,
//     cjm.job_id,
//     cjm.stage
//   FROM
//     candidate c
//   JOIN candidate_job_maping cjm ON
//     c.candidate_id = cjm.candidate_id
//   JOIN job j ON
//     j.job_id = cjm.job_id
//   WHERE
//     cjm.stage = 'HIRED'  `);

//     console.log("candidate_status : ", candidateDetail.rows);
//     //pool.end()
//     res.send({
//       statusCode: 200,
//       count: candidateDetail.rows.length,
//       data: candidateDetail.rows,
//     });
//   } catch (err) {
//     console.error(err.message);
//     return err;
//   }
// };
// ////

// const candidateRE = async (req, res) => {
//   try {
//     let candidateDetail = await pool.query(`SELECT
//     c.candidate_name,
//     c.candidate_id,
//     c.prev_company ,
//     j.job_title,
//     c.urls,
//     c.cv,
//     c.notes,
//     c.address,
//     c.created_at,
//     c.updated_at,
//     c.HiringManager,
//     cjm.job_id,
//     cjm.stage
//   FROM
//     candidate c
//   JOIN candidate_job_maping cjm ON
//     c.candidate_id = cjm.candidate_id
//   JOIN job j ON
//     j.job_id = cjm.job_id
//   WHERE
//     cjm.stage = 'REJECTED'  `);

//     console.log("candidate_status : ", candidateDetail.rows);
//     //pool.end()
//     res.send({
//       statusCode: 200,
//       count: candidateDetail.rows.length,
//       data: candidateDetail.rows,
//     });
//   } catch (err) {
//     console.error(err.message);
//     return err;
//   }
// };
///
const updateCand_Status = async (req, res) => {
  try {
    const stage = req.body.stage;

    const job_id = req.body.job_id;

    const candidate_id = req.body.candidate_id;

    console.log(req.body);

    let promises = [];

    req.body.map((data) => {
      promises.push(
        pool.query(
          `UPDATE "candidate_job_maping"

           set stage = $1 where job_id=$2 and candidate_id=$3 `,

          [data.stage, data.job_id, data.candidate_id]
        )
      );
    });

    await Promise.all(promises);

    // pool.end();

    res.json({ statusCode: 200, message: "Updated Successfully" });
  } catch (err) {
    res.json({ statusCode: 300, job: err.message });
    console.error(err.message);
  }
};

module.exports = {
  candidatesInfo,
  updateCand_Status,
  candidateJobStatus,
  candidateInitial,
  // candidateFR,
  // candidateHR,
  // candidateTR,
  // candidateRE,
  // candidateSR,
  // candidatePH,
  // candidateR,
};
