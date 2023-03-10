const express = require("express");
const router = express.Router();

const homeController = require("../Controllers/home_controller");

router.get("/", homeController.home);
router.use("/file", require("./file"));

module.exports = router;
