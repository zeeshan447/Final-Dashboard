const express = require("express");

const router = express.Router();
const jobs = require("../controller/jobcontroller");
router.get("/jobs", jobs.allPosted);
router.get("/job_owner", jobs.jobCreated);
module.exports = router;
