
const express = require("express")
const server = express()
const path = require("path")

server.set('view engine', 'ejs')
server.set('views',path.join(__dirname,'views'))
server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))

const routes = require("./routes")
server.use(routes)
server.listen(4000, () => {
    console.log("rodando")
})