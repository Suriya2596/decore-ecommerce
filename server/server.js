const express = require("express")
const app = express()
const cors  = require("cors")
const configureDB = require("./config/database")
const routes = require("./config/routes")

require("dotenv").config()
const Port = 5560
configureDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routes)

app.listen(Port,()=>{
    console.log("Port is running on",Port)
})