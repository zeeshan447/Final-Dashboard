const express = require("express");
const client = require("../client");
const pg = require("pg");
const app = express();
const files = require("./upload");
const fileUpload = require("express-fileupload");

app.use(
  fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 },
  })
);

const candidateget = async function (req, res) {
  try {
    let result = await client.query(`SELECT * FROM "candidate"`);

    res.json({
      status: 200,
      count: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
const candidateinsert = async function (req, res) {
  try {
    // const compname=  client.query(`SELECT company_name FROM "company" `)
    let {
      candidate_name,
      email,
      phone,
      urls,
      prev_company,
      applied_post,
      cv,
      notes,
      address,
    } = req.body;
    //  res.send("job id is", job_id);
    const job_id = await client.query(
      `select j.job_id  from job j where j.job_title = '${applied_post}'`
    );
    console.log("job id is", job_id.rows[0].job_id);
    // console.log(candidate_name);
    const candidate_ids = await client.query(
      `INSERT INTO "candidate" (candidate_name,email,phone,urls,prev_company,applied_post,cv, notes, address) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING candidate_id`,
      [
        candidate_name,
        email,
        phone,
        urls,
        prev_company,
        applied_post,
        cv,
        notes,
        address,
      ]
    );
    ////
    console.log("candidate_id ", candidate_ids.rows[0].candidate_id);
    const ids = await client.query(
      `INSERT INTO "candidate_job_maping" (candidate_id,job_id) VALUES($1,$2)`,
      [candidate_ids.rows[0].candidate_id, job_id.rows[0].job_id],
      function (err, result) {
        res.json({ statusCode: 201, candidate: "Add SuccesFull" });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.json({ statusCode: 300, candidate: error.message });
  }
};
const candidategetbyid = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { candidate_id } = req.params;
    //   console.log(company_id);
    //let {company_name} = req.body
    await client.query(
      `SELECT * FROM "candidate" WHERE candidate_id=$1 `,
      [candidate_id],
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
    console.log(error.message);
  }
};
const candidateupdated = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { candidate_id } = req.params;
    //const pool = client.query(`Select * from "company"`);
    let { candidate_name, email, phone, urls, prev_company } = req.body;
    //var updateData=req.body;
    //var sql = `UPDATE users SET ? WHERE id= ?`
    client.query(
      `Update "candidate" SET candidate_name = $1 , email = $2 , phone = $3 , urls = $4 , prev_company = $5 WHERE candidate_id=$6`,
      [candidate_name, email, phone, urls, prev_company, candidate_id],
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
const candidatedeleted = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { candidate_id } = req.params;
    client.query(
      `Delete From "candidate" WHERE candidate_id=$1`,
      [candidate_id],
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
    console.log(error.message);
  }
};
module.exports = {
  candidateget,
  candidateinsert,
  candidategetbyid,
  candidateupdated,
  candidatedeleted,
};
