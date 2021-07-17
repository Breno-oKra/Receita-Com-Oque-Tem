// primeira coisa que vai chamar o banco de dados
// primeira
const Database = require('./config')
// chamamos o require de config.js que é o open do sqlite

const initDb = {
    async init(){
        const db  = await Database()

        //aki vamos passar o sql
        await db.exec(`CREATE TABLE myTable (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            capa TEXT,
            ingredients TEXT,
            modo TEXT
            );
        `)
        await db.exec(`CREATE TABLE myIngredients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ingredients TEXT
            );
        `)
        await db.exec(`CREATE TABLE profile (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            email TEXT,
            about TEXT
            );
        `)
        // CASO NÃO QUEIREMOS PASSAR ALGUMA INFORMAÇÃO EM UM CAMPO, BASTA SOMENTE NAO CHAMALO QUANDO MOSTRAMOS A TABELA
        await db.run(`INSERT INTO myTable (
            title,
            capa,
            ingredients,
            modo
            ) VALUES (
                "Bolo de banana",
                "https://cdn.panelinha.com.br/receita/953607600000-Bolo-de-banana.jpg",
                "banana,ovo,açuca,manteiga,farinha_de_trigo,fermento",
                "1 - Preaqueça o forno a 180 ºC (temperatura média). \r\n\r\n 2 -Unte com manteiga uma fôrma para bolo inglês de 22 cm x 10 cm. Polvilhe com farinha de trigo, chacoalhe bem para espalhar e bata sobre a pia para retirar o excesso. \r\n \r\n 3 - Na batedeira, coloque a manteiga, o açúcar e bata em velocidade alta até formar um creme claro e fofo. Equanto isso, descasque as bananas, coloque num prato e amasse bem com um garfo.\r\n\r\n 4 - Sem parar de bater, junte um ovo de cada vez ao creme de manteiga e açúcar, batendo bem a cada adição. Acrescente as bananas amassadas, o extrato de baunilha e bata apenas para misturar.\r\n \r\n 5 - Desencaixe a tigela da batedeira, adicione a farinha em etapas, passando por uma peneira, e misture delicadamente com uma espátula a cada adição. Por último misture o fermento.\r\n \r\n 6 - Transfira a massa para a fôrma untada e leve ao forno para assar por cerca de 40 minutos - para conferir se o bolo está assado, espete um palito: se sair limpo, está no pronto. Retire o bolo do forno e deixe esfriar em temperatura ambiente antes de desenformar. Sirva a seguir."
            );
        `)
        await db.run(`INSERT INTO profile (
            name,
            avatar,
            email,
            about
            ) VALUES (
                "Breno Oliveira",
                "https://avatars.githubusercontent.com/u/68476879?s=400&u=2ea5496d522d8030324bdcb45278f598a96ed1c0&v=4",
                "brenookra@gmail.com",
                "focado em evoluir ❤️❤️❤️👨🏾‍💻🧑🏽‍🚀,MASTER-CHEF"
            );
        `)
        await db.run(`INSERT INTO myIngredients (
            ingredients
            ) VALUES (
                "oleo,ovo,sal"
            );
        `)
        await db.close()
    }

}

initDb.init()
//
// O BANCO DE DADOS NÃO ACEITA TRAÇOS -, ENTÃO VAMOS USART ANDERLINE _
// como fucinar um codigo sqlite
//CREATE TABLE profile (name,avatar,monthly_calculateBudget,days-per-week, hours-per-day,vocation-per-year,value-hour)