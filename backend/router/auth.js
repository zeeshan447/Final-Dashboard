var express = require("express");
var router = express.Router();

const login = require("../controller/login");

router.get("/outlook", login.outlookLogin);
router.get("/outlook/redirect", login.outlookLoginCallback);

module.exports = router;
