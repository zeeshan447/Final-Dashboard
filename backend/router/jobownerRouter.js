const express = require("express");
const router = express.Router();

const jobowner = require("../controller/jobowner");

router.get("/", jobowner.jobowner);

module.exports = router;
