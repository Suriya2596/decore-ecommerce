const mongoose = require("mongoose")

const Schema = mongoose.Schema

const cartSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    product:{
       items:[]
    },
    payment:{
        type:String
    },
    total:{
        type:Number,
        default:0
    },
    discount:{
        type:Number,
        default:0
    },
    grandTotal:{
        type:Number,
        default:0
    }
},{timestamps:true})

const Cart = mongoose.model("Cart",cartSchema)

module.exports = Cart