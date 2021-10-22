const express = require("express");

const router = express.Router();
const teams = require("../controller/teamcontroller");
router.route("/").get(teams.teamget).post(teams.teaminsert);
router
  .route("/:department_id")
  .get(teams.teamgetbyid)
  .put(teams.teamupdated)
  .delete(teams.teamdeleted);
module.exports = router;
