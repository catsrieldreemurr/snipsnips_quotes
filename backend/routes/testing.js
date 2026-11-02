const express = require("express");
const testController = require("../controllers/testController")
const Router = express.Router();

Router.get("/getCreateTestUser", testController.getNewTestQuote)
Router.get("/getAllTestUsers", testController.getAllQuotesTest)

module.exports = Router;