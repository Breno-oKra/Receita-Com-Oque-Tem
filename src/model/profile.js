const Database = require("../db/config")
module.exports = {
    async get(){
        const db = await Database()
        // vai pegar tudo da tabela
        const profi =  await db.get(`SELECT * FROM profile`)
        await db.close();
        // o arrow function desse geito é a mesma coisa que ter um return{infos}
        // retornando objetos
        return {
                name: profi.name,
                avatar: profi.avatar,
                email: profi.email,
                about: profi.about,
        } 
    },
    async update(data,id){
        const db = await Database()
        // vai pegar tudo da tabela
        await db.run(`UPDATE profile SET 
                name = "${data.name}",
                avatar = "${data.avatar}",
                email = "${data.email}",
                about = "${data.about}"
         WHERE id = ${id}
        `)
       
        await db.close();

},
}