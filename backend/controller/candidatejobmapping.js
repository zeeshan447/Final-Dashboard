const express = require("express");
const client = require("../client");
const pg = require("pg");
const candidate_jobget = async function (req, res) {
  try {
    // let query = "SELECT * FROM company";
    await client.query(
      `select u.user_name,j.job_title,c.candidate_name from "candidate_job_maping" cjm join "candidate" c on cjm.candidate_id = c.candidate_id join "job" j ON cjm.job_id =j.job_id join "users" u on j.user_id = u.user_id `,
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
const candidateChnageJob = async function (req, res) {
  let { candidate_job_maping_id, job_id } = req.body;
  console.log("sss", req.body);
  await client.query(
    "update candidate_job_maping set job_id = $1 where candidate_job_maping_id = $2",
    [job_id, candidate_job_maping_id],
    function (err, result) {
      if (err) {
        res.json({
          status: 300,
          msg: err.message,
        });
      } else {
        res.json({
          status: 200,
          msg: "Update Sucessfull",
        });
      }
    }
  );
};
module.exports = { candidate_jobget, candidateChnageJob };
