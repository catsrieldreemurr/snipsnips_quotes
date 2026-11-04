const bcrypt = require("bcryptjs")
const userModel = require("../models/user")

exports.postCreateUser = async (req, res, next) => {
    try{
        const pass = req.body.password
        const name = req.body.username.trim()

        if(name.length > 20){
          console.log(`Name is too long: ${name} (Length: ${name.length})`)
          return res.status(422).json({
            "failed": true,
            "errorMessage": "Usernames must be 20 Characters or Less."
          })
        }

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