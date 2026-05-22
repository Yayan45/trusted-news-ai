const express = require("express");
const router = express.Router();
const hoaxController = require("../controllers/hoaxController");

// Endpoint untuk FE menembak data: POST http://localhost:3000/api/check
router.post("/check", hoaxController.checkHeadline);

module.exports = router;
