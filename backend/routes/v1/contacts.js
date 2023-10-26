const express = require("express");

const controller = require("./../../controllers/v1/contacts");

const router = express.Router();

router.post("/send", controller.send);
router.get("/", controller.getAll);

module.exports = router;
