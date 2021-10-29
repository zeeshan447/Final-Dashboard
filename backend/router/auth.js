var express = require("express");
var router = express.Router();

const login = require("../controller/login");

router.get("/", login.outlookLogin);
router.get("/?code=", login.outlookLoginCallback);

module.exports = router;
