const express = require("express");
const router = express.Router();

const candidate = require("../controller/candidate");

router.get(
  "/",
  candidate.candidatesInfo,
  // candidate.candidateR,
  // candidate.candidateRE,
  // candidate.candidateSR,
  // candidate.candidateTR,
  // candidate.candidateFR,
  // candidate.candidateHR,
  // candidate.candidatePH,
  candidate.candidateInitial
);
// router.get("/review", candidate.candidateR);
router.get("/initial", candidate.candidateInitial);
// router.get("/phone", candidate.candidatePH);
// router.get("/fr", candidate.candidateFR);
// router.get("/sr", candidate.candidateSR);
// router.get("/tr", candidate.candidateTR);
// router.get("/hired", candidate.candidateHR);
// router.get("/rejected", candidate.candidateRE);
router.put("/status", candidate.updateCand_Status);

router.post("/status", candidate.candidateJobStatus);

module.exports = router;
