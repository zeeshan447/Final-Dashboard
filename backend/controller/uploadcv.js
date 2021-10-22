const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
require("dotenv").config();

const s3 = new aws.S3();

aws.config.update({
  secretAccessKey: "5IKPzBo1MP9i6fVi1bcYc0Rx5g/eqwiBPfh7Qc31",
  accessKeyId: "AKIAZC5OGWJ74DOL6HNY",
  region: "us-east-1",
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only PDF is allowed!"), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    // acl: "public-read",
    s3,
    bucket: "peoplex-assets-dev",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },

    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

module.exports = upload;
