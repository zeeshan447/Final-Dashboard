const express = require("express");
const router = express.Router();

const sendemail = require("../controller/send-email");

router.post("/", sendemail.sendemail);

module.exports = router;
