const express = require("express")
const routes = express.Router()
const userController = require("../app/controllers/UserController");

routes.post("/api/user/register",userController.register)
routes.post("/api/user/login",userController.login)


module.exports = routes