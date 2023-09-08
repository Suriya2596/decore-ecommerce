const express = require("express")
const app = express()
const cors  = require("cors")
const configureDB = require("./config/database")

require("dotenv").config()
const Port = 5000
configureDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(Port,()=>{
    console.log("Port is running on",Port)
})