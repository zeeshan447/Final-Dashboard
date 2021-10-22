const express = require('express');
const client = require('../client');
const department = require('../controller/departmentcontroller')
const router = express.Router();
router.route('/').get(department.departmentget).post(department.departmentinsert)
 router.route('/:department_id').get(department.departmentgetbyid).put(department.departmentupdated).delete(department.departmentdeleted)
  module.exports = router;