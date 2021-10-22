
const express = require('express');
const client = require('../client');
const pg = require('pg');
const companyget = async function(req,res){
    try {
      // let query = "SELECT * FROM company";
     await client.query(`SELECT * FROM "company"`,function(err,result){
          if(err){
              console.log(err.message);
          }
          else{
            res.json({
              status:200,
              count: result.rows.length,
              data:result.rows
            })
           // console.log(result.rows);
          }
      })
    } catch (error) {
        console.log(error.message);
    }
      
  }
  const companyinsert = function(req,res){
    try {
      //let query = "SELECT * FROM company";
      let {company_name,company_loc} = req.body
      client.query(`INSERT INTO "company"(company_name,company_loc) VALUES($1,$2)`,[company_name,company_loc],function(err,result){
          if(err){
              console.log(err.message);
          }
          else{
            res.json({
              status:201,
              data:result.rows
            })
           // console.log(result.rows);
          }
      })
    } catch (error) {
        console.log(error.message);
    }
      
  }
  const companygetbyid = function(req,res){
    try {
      //let query = "SELECT * FROM company";
      let {company_id} = req.params;
    //   console.log(company_id);
      //let {company_name} = req.body
     client.query(`SELECT * FROM "company" WHERE company_id=$1 `,[company_id],function(error,result){
        if(!error){
            res.json({
                status:200,
                count:result.length,
                data:result.rows,
            })
           }
           else{
               console.log(error.message);
           }

     })
    
       
    } catch (error) {
        console.log(error.message);
    }
      
  }
  const companyupdated = async function(req,res){
    try {
      //let query = "SELECT * FROM company";
      let {company_id} = req.params;
      //const pool = client.query(`Select * from "company"`);
      let {company_name,company_loc} = req.body;
      //var updateData=req.body;
      //var sql = `UPDATE users SET ? WHERE id= ?`
     await   client.query(`Update "company" SET company_name = $1 , company_loc=$2  WHERE company_id=$3`,[company_name,company_loc,company_id],function(error,result){
            if(!error){
             res.json({
                 msg:"data updated",
             })
            }
            else{
                console.log(error.message);
            }
        }) 
         
    } catch (error) {
        console.log(error.message);
    }
      
  }
  const companydeleted  = async function(req,res){
    try {
      //let query = "SELECT * FROM company";
      let {company_id} = req.params
      await client.query(`Delete From "company" WHERE company_id=$1`,[company_id],function(error,result){
          if(!error){
           res.json({
               msg:"Data Deleted",
           })
          }
          else{
              console.log(error.message);
          }
      })
       
    } catch (error) {
        console.log(error.message);
    }
      
  }
  module.exports = {
      companyget,
      companyinsert,
      companygetbyid,
      companyupdated,
      companydeleted
  }