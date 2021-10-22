const express = require("express");
const client = require("../client");
const pg = require("pg");
const roleget = async function (req, res) {
  try {
    // let query = "SELECT * FROM company";
    client.query(`SELECT * FROM "roles"`, function (err, result) {
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
    });
  } catch (error) {
    res.json({ statusCode: 300, candidate: error.message });
    console.log(error.message);
  }
};
const roleinsert = async function (req, res) {
  try {
    // const compname=  client.query(`SELECT company_name FROM "company" `)
    let { role_name, role_value } = req.body;
    await client.query(
      `INSERT INTO "roles" (role_name,role_value) VALUES($1,$2)`,
      [role_name, role_value],
      function (err, result) {
        if (err) {
          console.log(err.message);
        } else {
          res.json({
            status: 201,
            data: result.rows[0],
          });
          // console.log(result.rows);
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};
const roleupdated = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { role_id } = req.params;
    //const pool = client.query(`Select * from "company"`);
    let { role_name, role_value } = req.body;
    //var updateData=req.body;
    //var sql = `UPDATE users SET ? WHERE id= ?`
    await client.query(
      `Update "roles" SET role_name = $1 , role_value = $2 WHERE role_id=$3`,
      [role_name, role_value, role_id],
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
    res.json({ statusCode: 300, candidate: error.message });

    console.log(error.message);
  }
};
const rolegetbyid = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { role_id } = req.params;
    //   console.log(company_id);
    //let {company_name} = req.body
    client.query(
      `SELECT * FROM "roles" WHERE role_id=$1 `,
      [role_id],
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
    res.json({ statusCode: 300, candidate: error.message });
    console.log(error.message);
  }
};
const roledeleted = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { role_id } = req.params;
    client.query(
      `Delete From "roles" WHERE role_id=$1`,
      [role_id],
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
    res.json({ statusCode: 300, candidate: error.message });
    console.log(error.message);
  }
};
module.exports = {
  roleinsert,
  rolegetbyid,
  roledeleted,
  roleget,
  roleupdated,
};
