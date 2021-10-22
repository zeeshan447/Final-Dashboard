const express = require('express');
const router = express.Router();
const roles = require('../controller/userrolecontoller');
router.route('/').get(roles.usergetbyrole);
 //
 
 
 
 // router.route('/:role_id').get(roles.rolegetbyid).put(roles.roleupdated).delete(roles.roledeleted)
  module.exports = router;