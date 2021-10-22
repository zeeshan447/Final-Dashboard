const express = require("express");
const pg = require("pg");
const client = require("../client");
const userget = async function (req, res) {
  try {
    // let query = "SELECT * FROM company";
    await client.query(
      `SELECT u.user_id,u.user_name,u.email,r.role_name FROM "users" u join "roles" r on u.role_id=r.role_id`,
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
const userinsert = async function (req, res) {
  try {
    // var company_id =  client.query(`SELECT company_id FROM "company" `);
    //console.log(company_id);
    let { user_name, company_id, department_id, role_id, email, password } =
      req.body;
    await client.query(
      `INSERT INTO "users" (user_name,company_id,department_id,email,role_id) VALUES($1,$2,$3,$4,$5)`,
      [user_name, company_id, department_id, email, role_id],
      function (err, result) {
        if (err) {
          console.log(err.message);
        } else {
          res.json({
            status: 201,
            msg: "Add User Sucessfull",
          });
          // console.log(result.rows);
        }
      }
    );
  } catch (error) {
    console.log(error.message);
    res.json({ statusCode: 300, message: error.message });
  }
};
const userupdated = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { user_id } = req.params;
    //const pool = client.query(`Select * from "company"`);
    let { user_name, company_id, department_id, role_id, email } = req.body;
    //var updateData=req.body;
    //var sql = `UPDATE users SET ? WHERE id= ?`
    await client.query(
      `Update "users" SET user_name = $1 , company_id = $2 , department_id = $3 , role_id = $4 , email = $5  WHERE user_id=$6`,
      [user_name, company_id, department_id, role_id, email, user_id],
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
const usergetbyid = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { user_id } = req.params;
    //   console.log(company_id);
    //let {company_name} = req.body
    await client.query(
      `SELECT * FROM "users" WHERE user_id=$1 `,
      [user_id],
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
const userdeleted = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { user_id } = req.params;
    await client.query(
      `Delete From "users" WHERE user_id=$1`,
      [user_id],
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
////
const usergetbyrole = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    //  let {user_id} = req.params;
    //   console.log(company_id);
    //let {company_name} = req.body
    await client.query(
      `SELECT u.user_id,u.user_name,u.email,r.role_name FROM "users" u join "roles" r on u.role_id=r.role_id`,
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

///
module.exports = {
  userinsert,
  usergetbyid,
  userdeleted,
  userget,
  userupdated,
  usergetbyrole,
};
