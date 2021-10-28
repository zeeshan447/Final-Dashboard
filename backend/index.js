const express = require("express");
require("dotenv").config();
const client = require("./client");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const login = require("./router/auth");
const candidaterouters = require("./router/candidaterouter");
const companyrouters = require("./router/companyrouter");
const rolerouters = require("./router/rolerouter");
const userrouters = require("./router/userrouters");
const departmentrouters = require("./router/departmentrouter");
const userrolerouters = require("./router/userrolerouter");
const jobrouters = require("./router/jobrouters");
const candidate_job_maping = require("./router/candidatejobmapping");
const teamsrouter = require("./router/team");
const interview = require("./router/interview");
const hiringStages = require("./router/stagesRouter");
const worktype = require("./router/worktypeRouter");
const location = require("./router/locRouter");
const owner = require("./router/jobownerRouter");
const fileUpload = require("express-fileupload");
const upload = require("./router/upload");
const country = require("./router/country");
const sendemail = require("./router/emailRout");
const jobPosted = require("./router/jobPosted");

app.use(express.json());
app.use(cors());
// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "http://localhost:3000",
//     "http://localhost:2500/auth/outlook"
//   );

//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   // Request headers you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", true);

//   // Pass to next layer of middleware
//   next();
// });
app.listen(process.env.DB_PORT || 2500, () => {
  console.log("Server is now listening at port 2500");
});

client
  .connect()
  .then(() => console.log("Db is connected"))
  .catch((error) => console.log(error.message));
app.use("/candidate", candidaterouters);
app.use("/company", companyrouters);
app.use("/role", rolerouters);
app.use("/department", departmentrouters);
app.use("/user", userrouters);
app.use("/hiringstages", hiringStages);
//  app.use('/users',userrouters);
// app.use("/userbyrole", userrolerouters);
app.use("/job", jobrouters);
app.use("/uploadcv", upload);
app.use("/candidatebyjob", candidate_job_maping);
app.use("/team", teamsrouter);
app.use("/auth", login);
app.use("/interview", interview);
const can = require("./router/candidate");
app.use("/work-type", worktype);
app.use("/company-loc", location);
app.use("/job-owner", owner);
app.use("/can", can);
app.use("/posted", jobPosted);
app.use("/country", country);
app.use("/send-email", sendemail);
