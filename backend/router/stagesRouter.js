const express = require("express");
const router = express.Router();

const hiringStage = require("../controller/hiringStages");
router.get("/", hiringStage.hiringStages);

module.exports = router;
