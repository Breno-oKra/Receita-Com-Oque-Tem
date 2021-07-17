const myDB = require("../model/myReceitas")
const myIngred = require("../model/myIngredients")
const funcs = require("../controllers/ControllersNatural")
const DbProfile = require("../model/profile")
module.exports = {
   
    async index(req,res){
        let Datadisponivel = []
        const mineReceitas = await myDB.get()
        const myIngredients = await myIngred.get()
        const profile = await DbProfile.get()
        const disponiveis = funcs.disponivel(funcs.dataLoja,mineReceitas,myIngredients[0].ingredients);

        Datadisponivel = disponiveis
        let qtdIngredits = myIngredients[0].ingredients.length
        let qtdMineReceitas = mineReceitas.length
        let qtdDisponiveis = Datadisponivel.length
        res.render("index",{receitasLoja:funcs.dataLoja,disponiveis:Datadisponivel,myIngrediets:myIngredients[0].ingredients,myReceitas:mineReceitas,qtdDisponiveis,qtdMineReceitas,qtdIngredits,lastReceita:funcs.lastReceita,profile})
    },
    createShow(req,res){
        res.render("create")
    },
    async createEdit(req,res){
        const infos = req.body.ingredientsOn.split(",");
        const receitas = await myDB.get()

        let rand = Math.random(50000)
        const lastId = receitas[receitas.length -1].id || rand;

        const datIngredients = []
         for (let i = 1; i < infos.length; i++) {
            datIngredients.push(infos[i])
             
         }
        const data = {
            id:rand,
            title: req.body.title,
            capa: req.body.capa || "https://img2.gratispng.com/20180331/atw/kisspng-cupcake-drawing-line-art-watercolor-painting-clip-cupcake-line-drawing-5abf3fbc857105.1036362315224831325466.jpg",
            modo: req.body.modo,
            ingredients:datIngredients
        }
        funcs.lastReceita = data
        await myDB.create(data)
        res.redirect("/")
    },
    async delete(req,res){
        const ids = req.params.id
        await myDB.del(ids)
        res.redirect("/")
    },
    async getInfos(req,res){
        const receitas = await myDB.get()
        let id = req.params.id
        let items = receitas.find(item => item.id == id)
        let ingredientsRefatored = ""
        let refatored = items.ingredients
        refatored.forEach((item) =>{
            ingredientsRefatored = ingredientsRefatored + "," + item
        })
        let data = {
            id: items.id ,
            title: items.title,
            capa: items.capa,
            ingredients:ingredientsRefatored,
            modo: items.modo
        }
        res.render("editCreate",{objMine:data})

        
    },
    async update(req,res){
         const receitas = await myDB.get()
        const infos = req.body.ingredientsOn.split(",");
        const datIngredients = []
         for (let i = 1; i < infos.length; i++) {
            datIngredients.push(infos[i])
             
         }
         let finder = receitas.find(item => item.id == req.params.id)
         
        const data = {
            title: req.body.title,
            capa: req.body.capa,
            ingredients:datIngredients,
            modo: req.body.modo,   
        }
        funcs.lastReceita = data
        
        await myDB.update(data,finder.id)
        res.redirect("/")
    },
    async ViewReceita(req,res){
        const receitas = await myDB.get()
        let idMine = req.params.id.split("+")
        let id = req.params.id
        let data = {} 
        let obj = funcs.dataLoja.find(item => item.id == id) 
        let objMine = receitas.find(item => item.id == idMine[0]) 
        
        if(idMine[1] == "myReceitas"){
            data = objMine
            funcs.lastReceita = objMine
        }
        else{
            data = obj
            funcs.lastReceita = obj
        }
    
        res.render("seeReceita",{obj:data})
    },
}