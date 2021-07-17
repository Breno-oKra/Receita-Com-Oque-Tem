const myIngred = require("../model/myIngredients")
const views = __dirname + "/view/"
module.exports = {
          
    async ViewIngredients(req,res){
        let ingredients = await myIngred.get()
        res.render("addIngredients",{ingredients:ingredients[0].ingredientsRaiz})
    },
    async UpdateIngredients(req,res){
        let myIngredietsEdit = req.body.myingredients.substring(1)

        await myIngred.update(myIngredietsEdit,1)
        res.redirect("/")
    }
}