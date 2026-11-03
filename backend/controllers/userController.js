const bcrypt = require("bcryptjs")
const userModel = require("../models/user")

exports.postCreateUser = async (req, res, next) => {
    try{
        const pass = req.body.password.trim()
        const name = req.body.username.trim()

        const userExists = await userModel.findOne({
          where: {
            userName: name
          }
        })

        if(userExists === null){
          const salted = await bcrypt.hash(pass, 10)
          const user = await userModel.create({
              userName: name,
              passwordHash: salted
          })
          user.save();
          res.status(201).json({
              "success": `Succesfully created the user!`
          })
        }
        else {
          console.log("Existing User Found.")

          res.status(409).json({
            "failed": true, 
            "errorMessage": "This Username Already Exists. Please try again"
          })
        } 
    } 
    catch(err) {
        res.status(500).json({
            "failed": true,
            "errorMessage": err.message
        })
    }
    
}