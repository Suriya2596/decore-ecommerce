const mongoose = require("mongoose")
const validator = require("validator")
const { isEmail, isNumeric } = require("validator/lib")
const { Schema } = mongoose

const userModel = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return isEmail(value)
            },
            message: function () {
                return "Please enter validate E-mail address"
            }
        }
    },
    mobile: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return isNumeric(value)
            },
            message: function () {
                return "please enter validate mobile Number"
            }
        },
        minlength: 10,
        maxlength: 10,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 128,
    },
    role: {
        type: String,
        default: "User"
    }
}, { timestamps: true })

const User = mongoose.model("User", userModel)

module.exports = User