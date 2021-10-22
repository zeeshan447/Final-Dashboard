const express = require('express');
const router = express.Router();
const roles = require('../controller/rolecontroller');
router.route('/').get(roles.roleget).post(roles.roleinsert);
   router.route('/:role_id').get(roles.rolegetbyid).put(roles.roleupdated).delete(roles.roledeleted)
  module.exports = router;
  