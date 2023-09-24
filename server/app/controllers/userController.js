const User = require("../models/userModel");
const userController = {}

userController.register = (req, res) => {
    const body = req.body
    User.findOne({ email: body.email })
        .then((user) => {
            if (!user) {
                
            } else {
                res.status(400).json({
                    message: "user is already exist"
                })
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = userController