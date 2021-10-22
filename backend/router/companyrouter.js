const express = require('express');
const client = require('../client');
const company = require('../controller/companycontroller');
const router = express.Router();
router.route('/').get(company.companyget).post(company.companyinsert);
  router.route('/:company_id').get(company.companygetbyid).put(company.companyupdated).delete(company.companydeleted)
  module.exports = router;