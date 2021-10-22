const upload = require("./uploadcv");
const singleUpload = upload.single("cv");

const uploadfile = (req, res) => {
  try {
    singleUpload(req, res, function (err) {
      if (err) {
        console.log(err);
        res.json({
          success: false,
          errors: {
            title: "Image Upload Error",
            detail: err.message,
            error: err,
          },
        });
      }
      console.log(req.file);
      console.log("req.file.location :>> ", req.file.location);
      res.json({ statusCode: 200, url: req.file.location });
      // let update = { profilePicture: req.file.location };
    });
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
module.exports = {
  uploadfile,
};
