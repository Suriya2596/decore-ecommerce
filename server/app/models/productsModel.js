const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
},{timestamps:true})

const Product = mongoose.model("Product",productSchema)

module.exports = Product