const express = require("express");
const client = require("../client");
const pg = require("pg");
const jobget = async function (req, res) {
  try {
    // let query = "SELECT * FROM company";
    let { department_id } = req.params;
    // let department_id = req.query.search;
    client.query(
      `select department_name,d.department_id ,job_id ,job_title,j.worktype_id, wt.worktype, job_loc, job_createdby from job j join department d on d.department_id =j.department_id join work_type wt on j.worktype_id = wt.worktype_id where d.department_id =$1`,
      [department_id],
      function (err, result) {
        if (err) {
          console.log(err.message);
        } else {
          res.json({
            status: 200,
            count: result.rows.length,
            data: result.rows,
          });
          console.log(result.rows.length);
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};
const jobinsert = async function (req, res) {
  try {
    const job_title = req.body.job_title;

    const job_loc = req.body.job_loc;

    const job_createdby = req.body.job_createdby;

    const department_id = req.body.department_id;

    const description = req.body.description;

    const is_active = req.body.is_active;

    const user_id = req.body.user_id;

    const company_id = req.body.company_id;

    const worktype_id = req.body.worktype_id;

    console.log(req.body);

    let insertjob = await client.query(
      `INSERT INTO "job"(job_title,job_loc,job_createdby,department_id,description,is_active,user_id,company_id,worktype_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,

      [
        job_title,

        job_loc,

        job_createdby,

        department_id,

        description,

        is_active,

        user_id,

        company_id,

        worktype_id,
      ]
    );

    console.log(insertjob.rows);

    res.json({ statusCode: 201, message: "job added successfully" });
  } catch (err) {
    console.error(err.message);
    res.json({ statusCode: 300, job: err.message });
    throw err;
  }
};

//........//

const archivedjob = async function (req, res) {
  try {
    const job_id = req.body.job_ids;

    let updatejob = await client.query(
      `update "job" set is_active = false where job_id=ANY($1)`,
      [job_id]
    );

    res.json({ statusCode: 201, message: "Jobs Archived successfully" });
  } catch (err) {
    console.error(err.message);
    res.send({ statusCode: 500, message: console.error(err.message) });
  }
};

//........//
const jobupdated = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { job_id } = req.params;
    //const pool = client.query(`Select * from "company"`);
    let {
      job_title,
      job_loc,
      job_createdby,
      department_id,
      description,
      is_active,
      user_id,
      company_id,
      worktype_id,
    } = req.body;
    //var updateData=req.body;
    //var sql = `UPDATE users SET ? WHERE id= ?`
    await client.query(
      `Update "job" SET job_title = $1 , job_loc = $2 , job_createdby = $3, department_id = $4, description =$5,is_active=$6,user_id = $7,company_id=$8,worktype_id=$9 WHERE job_id =$10`,
      [
        job_title,
        job_loc,
        job_createdby,
        department_id,
        description,
        is_active,
        user_id,
        company_id,
        worktype_id,
        job_id,
      ],
      function (error, result) {
        if (!error) {
          res.json({
            msg: "data updated",
          });
        } else {
          console.log(error.message);
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

//
const jobgetbyid = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { job_id } = req.params;
    //   console.log(company_id);
    //let {company_name} = req.body
    client.query(
      `SELECT * FROM "job" WHERE job_id=$1 `,
      [job_id],
      function (error, result) {
        if (!error) {
          res.json({
            data: result.rows,
          });
        } else {
          console.log(error.message);
        }
      }
    );
  } catch (error) {
    res.json({ statusCode: 300, job: error.message });
    console.log(error.message);
  }
};
const jobdeleted = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { job_id } = req.params;
    client.query(
      `Delete From "job" WHERE job_id=$1`,
      [job_id],
      function (error, result) {
        if (!error) {
          res.json({
            msg: "Data Deleted",
          });
        } else {
          console.log(error.message);
        }
      }
    );
  } catch (error) {
    res.json({ statusCode: 300, job: error.message });
    console.log(error.message);
  }
};

const jobowner = async (req, res) => {
  try {
    let role = await client.query(
      `select user_name,user_id , role_name from users u join roles r on  u.role_id = r.role_id where role_value=80`
    );

    res.json({ statusCode: 200, joboewner: role.rows });
  } catch (error) {
    res.json({ statusCode: 300, job: error.message });
    console.log(error.message);

    throw error;
  }
};

//////
const allJob = async function (req, res) {
  try {
    let jobs =
      await client.query(`select count(cjm.*) as totalCandidate, j.* from job j

    left join candidate_job_maping cjm on cjm.job_id = j.job_id

    where 1=1

   

    group by j.job_id`);

    res.json({ statusCode: 200, candidateJob: jobs.rows });
  } catch (error) {
    console.log(error.message);

    res.json({ statusCode: 300, jobs: error.message });
  }
}; ////

const jobCreated = async function (req, res) {
  try {
    // let query = "SELECT * FROM company";
    // let department_id = req.query.search;
    client.query(
      `select user_id ,user_name from users `,
      function (err, result) {
        if (err) {
          console.log(err.message);
        } else {
          res.json({
            status: 200,
            count: result.rows.length,
            data: result.rows,
          });
          console.log(result.rows.length);
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};
//////

///////////////
const allPosted = async function (req, res) {
  let department_id = req.query.department_id;
  let job_createdby = req.query.job_createdby;
  let job_loc = req.query.job_loc;
  try {
    console.log("in try");
    const jobs = await client.query(
      `select
      d.department_id,
      d.department_name,
        array_agg(jsonb_build_object( 'job_id',j.job_id ,'job_title', 
        j.job_title,'job_loc', j.job_loc,'job_created', 
        j.job_createdby ,'work_id',j.worktype_id,'work_type',
         wt.worktype,'jobDescription',j.description,
         'jobStatus',j.is_active,'user_name',u.user_name,'user_id',u.user_id, 'departmentName', d.department_name, 'department_id', d.department_id

         )) as jobs
        
      from
        job j 
      join department d on
        d.department_id = j.department_id 
      join users u on
      j.user_id = u.user_id  
      join work_type wt on
        j.worktype_id = wt.worktype_id 
       where 1=1
      ${department_id ? ` and j.department_id = '${department_id}'` : ""}
      ${job_loc ? ` and j.job_loc ilike '%${job_loc}%'` : ""}
      ${job_createdby ? ` and j.job_createdby ilike '%${job_createdby}%'` : ""}
      group by d.department_id`
    );
    console.log("dataerror", jobs.rows);
    res.json({ statusCode: 200, job: jobs.rows });
    console.log("error below");
  } catch (error) {
    console.log(error.message);
    res.json({ statusCode: 300, job: error.message });
    throw error;
  }
};
////
module.exports = {
  jobinsert,
  jobgetbyid,
  jobdeleted,
  jobget,
  jobupdated,
  jobowner,
  allPosted,
  allJob,
  archivedjob,
  jobCreated,
};
