const mongoose = require("mongoose")
const {Schema} = mongoose

const categoryModel = new Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},{timestamps:true})

const Category = mongoose.model("Category",categoryModel)

module.exports = Category