const express = require("express");
const router = express.Router();

const interview = require("../controller/addInterview");

router.post("/schedule", interview.interviewSchedule);

router.put("/feedback/:interviewer_status_id", interview.updateFeedback);

router.get("/", interview.InterviewList);
router.get("/:user_id", interview.userInterviewList);
router.get("/candidate/:candidate_id", interview.candidateInterviewList);
router.delete("/schedule/:interviewer_status_id", interview.scheduleReleased);

module.exports = router;
