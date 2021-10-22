const express = require('express');
const client = require('../client');
const pg = require('pg');

const usergetbyrole = async function(req,res){
    try {
      //let query = "SELECT * FROM company";
    //  let {user_id} = req.params;
    //   console.log(company_id);
      //let {company_name} = req.body
    await client.query(`SELECT u.user_id,u.user_name,u.email,r.role_name FROM "users" u join "roles" r on u.role_id=r.role_id`,function(error,result){
        if(!error){
            res.json({
                data:result.rows,
            })
           }
           else{
               console.log(error.message);
           }

     })
    
       
    } catch (error) {
        console.log(error.message);
    }}


  ///
  module.exports = {
      usergetbyrole
  }