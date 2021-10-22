const express = require("express");
const client = require("../client");
const pg = require("pg");
const teamget = async function (req, res) {
  try {
    // let query = "SELECT * FROM company";
    client.query(
      `select * from team t`,

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
const teaminsert = async function (req, res) {
  try {
    // const compname=  client.query(`SELECT company_name FROM "company" `)
    let { team_name, department_id } = req.body;
    await client.query(
      `INSERT INTO "team" (team_name,department_id) VALUES($1,$2)`,
      [team_name, department_id],
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
    res.json({ statusCode: 300, candidate: error.message });
    console.log(error.message);
  }
};
const teamupdated = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { team_id } = req.params;
    //const pool = client.query(`Select * from "company"`);
    let { team_name, department_id } = req.body;
    //var updateData=req.body;
    //var sql = `UPDATE users SET ? WHERE id= ?`
    await client.query(
      `Update "team" SET team_name = $1 , department_id = $2 WHERE team_id=$3`,
      [team_name, department_id, team_id],
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
const teamgetbyid = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let department_id = req.params.department_id;
    console.log(department_id);
    //   console.log(company_id);
    //let {company_name} = req.body
    client.query(
      `select t.team_id ,t.team_name  from team t where t.department_id = $1 `,
      [department_id],
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
const teamdeleted = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { team_id } = req.params;
    client.query(
      `Delete From "team" WHERE team_id=$1`,
      [team_id],
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
  teaminsert,
  teamgetbyid,
  teamdeleted,
  teamget,
  teamupdated,
};
