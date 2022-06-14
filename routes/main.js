const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
