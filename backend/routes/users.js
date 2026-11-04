const express = require("express");
const userController = require("../controllers/userController")
const Router = express.Router();

const { body } = require("express-validator")

Router.post("/postCreateUser", [
  body('username')
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3 and 20 Characters long.")
    .isAlphanumeric()
    .withMessage("Username must be Alphanumeric Characters only. (A-Z + 0-9)"),
  body("password")
    .isLength({min: 3})
    .withMessage("Password must be atleast 3 Characters long.")
], userController.postCreateUser)

module.exports = Router;