const express = require("express");
const router = express.Router();

const interview = require("../controller/addInterview");
router.put("interview/:user_id", interview.userGetInterview);

module.exports = router;
