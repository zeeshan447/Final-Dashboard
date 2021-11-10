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
    let {
      candidate_name,
      email,
      address,
      phone,
      urls,
      prev_company,
      applied_post,
      notes,
      cv,
      expected_salery,
      notice_period_at_current_employer,
      total_experience,
    } = req.body;
    const data = await client.query(
      `INSERT INTO "candidate" (candidate_name,email, address,phone,urls,prev_company,applied_post, notes, cv, expected_salery, notice_period_at_current_employer, total_experience) 
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
      [
        candidate_name,
        email,
        address,
        phone,
        urls,
        prev_company,
        applied_post,
        notes,
        cv,
        expected_salery,
        notice_period_at_current_employer,
        total_experience,
      ]
    );
    res.status(201).json({ message: "candidate inserted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(300).json({ message: error.message });
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
          res.status(200).json({
            data: result.rows,
          });
        } else {
          res.status(500).json({
            msg: error.message,
          });
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
          res.status(200).json({
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
          res.status(200).json({
            msg: "Data Deleted",
          });
        } else {
          res.status(500).json({
            data: error.message,
          });
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
