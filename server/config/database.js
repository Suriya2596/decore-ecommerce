const mongoose = require("mongoose")

const mongodbURL = "mongodb+srv://suriyajagan25:suriyajagan25@cluster0.dininsb.mongodb.net/?retryWrites=true&w=majority"
//  mongodb://127.0.0.1:27017/decore-ecommerce
const configureDB = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/decore-ecommerce")
    .then(()=>{
        console.log("Connected to database")
    })
    .catch((err)=>{
        console.log(err,"Not connect to database")
    })
}

module.exports = configureDB