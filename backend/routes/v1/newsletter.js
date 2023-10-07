const express = require("express");
const newsletterController = require("./../../controllers/v1/newsletter");

const router = express.Router();

router.post("/newsletter", newsletterController.add);

module.exports = router;
