const bcrypt = require("bcryptjs")
const userModel = require("../models/user")

exports.postCreateUser = async (req, res, next) => {
    try{
        const pass = req.body.password
        const name = req.body.username

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
    catch(err) {
        res.status(500).json({
            "failed": true,
            "errorMessage": err.message
        })
    }
    
}