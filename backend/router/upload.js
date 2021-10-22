const express = require("express");
const router = express.Router();

const cvupload = require("../controller/upload");

router.post("/", cvupload.uploadfile);

module.exports = router;
