const Database = require("../db/config")
module.exports = {
    async get(){
            const db = await Database()
            // vai pegar tudo da tabela
            const ingredients =  await db.all(`SELECT * FROM myIngredients`)
    
            await db.close();
            // o arrow function desse geito é a mesma coisa que ter um return{infos}
            // retornando objetos
            return ingredients.map( item => ({
                    ingredientsRaiz:item.ingredients,
                    ingredients: item.ingredients.split(","),
            })) 
    },
    async update(data,id){
        const db = await Database()
        // vai pegar tudo da tabela
        await db.run(`UPDATE myIngredients SET ingredients = "${data}" WHERE id = ${id}
        `)
       
        await db.close();

}
}