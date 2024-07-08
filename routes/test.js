const express = require("express");
const testController = require("../controller/testController");

const router = express.Router();

router.get("/", testController.test);
router.get("/test-db", testController.testDB);

module.exports = router;
