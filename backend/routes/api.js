const express = require("express");
const greetingController = require("../controllers/greetingController")
const Router = express.Router();

Router.get("/greeting", greetingController.getRandomGreeting)

module.exports = Router;