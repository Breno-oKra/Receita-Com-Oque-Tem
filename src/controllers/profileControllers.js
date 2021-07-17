const db = require("../model/profile")
module.exports = {
    async get(req,res){   
        const data = await db.get()
        res.render("profile",{data})
    },
    async update(req,res){
        const data = req.body
        await db.update(data,1)

        res.redirect("/profile")
    }
    
}