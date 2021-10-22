const express = require('express');
const client = require('../client');
const router = express.Router();
const candidate = require ('../controller/candidatecontroller')
router.route('/').get(candidate.candidateget).post(candidate.candidateinsert)
  router.route('/:candidate_id').get(candidate.candidategetbyid).put(candidate.candidateupdated).delete(candidate.candidatedeleted)

    module.exports = router;