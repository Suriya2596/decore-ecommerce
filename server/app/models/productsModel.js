const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    newPrice:{
        type:Number,
    },
    offer:{
        type:String,
    },
    remainig:{
        type:Number
    },
    soldNo:{
        type:Number
    },
    mainImage:{
        type:String,
    },
    images:{
        items:[]
    },
    description: {
        type:String,
    },
    video:{
        items:[]
    },
    prdImage:{
        items:[]
    }
},{timestamps:true})

const Product = mongoose.model("Product",productSchema)

module.exports = Product