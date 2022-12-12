const express = require("express");
const {
  uploadS3,
} = require("../middleware");

const {
  s3upload
} = require("../controller/awsupload.controller");
const router = express.Router();

router.post(
  "/upload",
  uploadS3.array("image"),
  s3upload
);

module.exports = router;