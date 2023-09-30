const User = require("../models/userModel");
const userController = {}
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

userController.register = (req, res) => {
    const body = req.body
    User.findOne({ email: body.email })
        .then((user) => {
            if (!user) {
                bcrypt.genSalt(2)
                    .then((salt) => {
                        if (salt) {
                            bcrypt.hash(body.password, salt)
                                .then((encryptPassword) => {
                                    if (encryptPassword) {
                                        body.password = encryptPassword
                                        User.create(body)
                                            .then((newUser) => {
                                                if (newUser) {
                                                    res.json(newUser)
                                                } else {
                                                    res.status(400).json({
                                                        message: "user is not saved"
                                                    })
                                                }
                                            })
                                            .catch((err) => {
                                                res.json(err)
                                            })
                                    }
                                })
                                .catch((err) => {
                                    res.json(err)
                                })
                        }
                    })
            } else {
                res.status(400).json({
                    message: "user is already exist"
                })
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

userController.login  = (req,res)=>{
    const body = req.body
    User.findOne({email:body.email})
    .then((user)=>{
        if(user){
            bcrypt.compare(body.password,user.password)
            .then((match)=>{
                if(match){
                    const tokenData = {
                        _id : user._id,
                        email: user.email
                    }
                    const token = jwt.sign(tokenData,process.env.JWT,{expiresIn:'2d'})
                    res.json({token:`Bearer ${token}`})
                }else{
                    res.status(400).json({
                        message: "Invalidate Email or Password"
                    })
                }
            })
            .catch((err)=>{
                res.json(err)
            })
        }else{
            res.status(400).json({
                message: "Invalidate Email or Password"
            })
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports = userController