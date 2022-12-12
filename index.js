const express = require("express");
const env = require("dotenv");
const app = express();
const cors = require("cors");

//routes
const s3upload = require("./router/awsupload.routes");

//environment variable or you can say constants
env.config();

app.use(cors());
app.use(express.json());
app.use(s3upload);

app.listen(6000, () => {
  console.log(`Server is running on port 6000`);
});