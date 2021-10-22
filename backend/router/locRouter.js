const express = require("express");
const router = express.Router();

const worktype = require("../controller/company-location");

router.get("/", worktype.companylocation);
router.post("/", worktype.locationinsert);
router.get("/:country_id", worktype.companyLocationbyID);
module.exports = router;
