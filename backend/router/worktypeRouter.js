const express = require("express");
const router = express.Router();

const worktype = require("../controller/worktype");

router.get("/", worktype.worktype);

module.exports = router;
