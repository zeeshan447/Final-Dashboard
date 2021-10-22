const express = require("express");
const router = express.Router();

const worktype = require("../controller/country");

router.get("/", worktype.countryGet);
router.post("/", worktype.countryinsert);
module.exports = router;
