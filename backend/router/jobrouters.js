const express = require("express");

const router = express.Router();
const jobs = require("../controller/jobcontroller");
router.route("/:department_id").get(jobs.jobget);
router.route("/").get(jobs.allJob).post(jobs.jobinsert);
router
  .route("/:job_id")
<<<<<<< HEAD

=======
  //.get(jobs.jobgetbyid)
>>>>>>> c651d899dd7e3357d88d238c54461bbbfd8369a7
  //.put(jobs.jobupdated)
  .delete(jobs.jobdeleted);
router.get("/job", jobs.allPosted);
router.get("/postedjobs/:job_id", jobs.jobgetbyid);
router.put("/archivejob", jobs.archivedjob);
router.put("/:job_id", jobs.jobupdated);

module.exports = router;
