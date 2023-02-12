const express = require("express");
const router = express.Router();

const fileController = require("../Controllers/file_controller");

router.post("/upload", fileController.upload);
router.get("/open/:file", fileController.openFile);
router.delete("/delete/:file", fileController.deleteFile);

module.exports = router;
