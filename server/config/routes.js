const express = require("express")
const userController = require("../app/controllers/userController")
const { authentication } = require("../app/middleware/authenticationMiddleware")
const routes = express.Router()


routes.post("/api/user/register",userController.register)
routes.post("/api/user/login",userController.login)
routes.get("/api/user",authentication,userController.account)


module.exports = routes