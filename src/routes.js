const express = require("express")
const routes = express.Router()
const profileControllers = require("./controllers/profileControllers")
const ControllersReceitas = require("./controllers/receitasControllers")
const ControllersIngredients = require("./controllers/ingredientsControllers")

routes.get('/',ControllersReceitas.index)
routes.get('/create.html',ControllersReceitas.createShow)
routes.post('/create.html',ControllersReceitas.createEdit)
routes.post('/delete/:id',ControllersReceitas.delete)
routes.get("/profile",profileControllers.get)
routes.post("/profile",profileControllers.update)
routes.get('/editCreate.html/:id',ControllersReceitas.getInfos)
routes.post('/editCreate.html/:id',ControllersReceitas.update)
routes.get('/seeReceita/:id',ControllersReceitas.ViewReceita)
routes.get('/addIngredients.html',ControllersIngredients.ViewIngredients)
routes.post('/addIngredients.html',ControllersIngredients.UpdateIngredients)

module.exports = routes