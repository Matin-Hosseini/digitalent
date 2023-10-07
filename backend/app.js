const express = require("express");
const authRouter = require("./routes/v1/auth");
const newsletterRouter = require("./routes/v1/newsletter");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(
  "/courses/covers",
  express.static(path.join(__dirname, "public", "courses", "covers"))
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1/auth", authRouter);
app.use("/v1", newsletterRouter);

module.exports = app;
