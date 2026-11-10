const express = require("express");
const userController = require("../controllers/users")

const router = express.Router();

router.get("/getUserList", userController.getUserList)

module.exports = router;