const express = require("express");

const router = express.Router();
const jobs = require("../controller/jobcontroller");
router.route("/:department_id").get(jobs.jobget);
router.route("/").get(jobs.allJob).post(jobs.jobinsert);
router
  .route("/:job_id")
  .get(jobs.jobgetbyid)
  //.put(jobs.jobupdated)
  .delete(jobs.jobdeleted);
router.get("/job", jobs.allPosted);
router.get("/postedjobs/:job_id", jobs.jobgetbsyid);
router.put("/archivejob", jobs.archivedjob);
router.put("/:job_id", jobs.jobupdated);

module.exports = router;
