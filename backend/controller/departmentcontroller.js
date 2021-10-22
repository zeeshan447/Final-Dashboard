const express = require("express");
const pool = require("../client");
const pg = require("pg");
const departmentget = async function (req, res) {
  try {
    // let query = "SELECT * FROM company";
    await pool.query(`Select * from department d`, function (err, result) {
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
    console.log(error.message);
  }
};
const departmentinsert = async function (req, res) {
  try {
    // var company_id =  client.query(`SELECT company_id FROM "company" `);
    //console.log(company_id);
    let { department_name, company_id } = req.body;
    await pool.query(
      `INSERT INTO "department" (department_name,company_id) VALUES($1,$2)`,
      [department_name, company_id],
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
const departmentgetbyid = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { department_id } = req.params;
    //   console.log(company_id);
    //let {company_name} = req.body
    let teams = await pool.query(
      `select d.department_id, d.department_name,  array_agg(jsonb_build_object( d.department_id , t.team_name)) as Teams 
         from team t join department d on t.department_id = d.department_id where d.department_id=$1
          group by d.department_id `,
      [department_id]
    );

    res.json({
      data: teams.rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const departmentupdated = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { department_id } = req.params;
    //const pool = client.query(`Select * from "company"`);
    let { department_name, company_id } = req.body;
    //var updateData=req.body;
    //var sql = `UPDATE users SET ? WHERE id= ?`
    await pool.query(
      `Update "department" SET department_name = $1 ,company_id = $2 WHERE department_id=$3`,
      [department_name, company_id, department_id],
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
const departmentdeleted = async function (req, res) {
  try {
    //let query = "SELECT * FROM company";
    let { department_id } = req.params;
    await pool.query(
      `Delete From "department" WHERE department_id=$1`,
      [department_id],
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
  departmentget,
  departmentinsert,
  departmentgetbyid,
  departmentupdated,
  departmentdeleted,
};
