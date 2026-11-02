const express = require("express");
const testController = require("../controllers/testController")
const Router = express.Router();

Router.get("/getTestUser", testController.getNewTestQuote)

module.exports = Router;