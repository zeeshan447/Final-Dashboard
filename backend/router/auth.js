var express = require("express");
var router = express.Router();

const login = require("../controller/login");

router.get("/outlook", login.outlookLogin);
router.get("/outlook/redirect", login.outlookLoginCallback);
router.get("/outlook/logout", login.outlookLogout);

module.exports = router;
