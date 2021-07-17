
const Database = require("../db/config")

module.exports = {
    async get(){
            const db = await Database()
            // vai pegar tudo da tabela
            const receitas =  await db.all(`SELECT * FROM myTable`)
            await db.close();
            // o arrow function desse geito é a mesma coisa que ter um return{infos}
            // retornando objetos
            return receitas.map( item => ({
                    id: item.id,
                    title: item.title,
                    capa: item.capa,
                    ingredients: item.ingredients.split(","),
                    modo: item.modo,
            })) 
    },
    async create(newReceita){
        const db = await Database()
        await db.run(`INSERT INTO myTable(
                title,
                capa,
                ingredients,
                modo

        ) VALUES (
            "${newReceita.title}",
            "${newReceita.capa}",
            "${newReceita.ingredients}",
            "${newReceita.modo}"
        )`)
        await db.close()

    },
    async update(data,id){
        const db = await Database()
        // vai pegar tudo da tabela
        await db.run(`UPDATE myTable SET 
                title = "${data.title}",
                capa = "${data.capa}",
                ingredients = "${data.ingredients}",
                modo = "${data.modo}"
         WHERE id = ${id}
        `)
       
        await db.close();

},
    async del(Dataid){
        const db = await Database()
        //DELETE FROM jobs WHERE  id, deleta da tabela jobs onde o id for igual a id que passamos
        await db.run(`DELETE FROM myTable WHERE  id = ${Dataid}`)

        await db.close()
    },
}