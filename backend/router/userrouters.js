const express = require('express');

const router = express.Router();
const users = require('../controller/usercontroller')
router.route('/').get(users.userget,users.usergetbyrole).post(users.userinsert);
router.route('/:user_id').get(users.usergetbyid).put(users.userupdated).delete(users.userdeleted)
router.route('/').get(users.usergetbyrole);
module.exports = router;