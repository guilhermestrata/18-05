//importar o pacote express
const express = require("express")
//executar o express 
const app = express()
//definir a porta do servidor
const porta = process.env.PORT || 3030

app.use(express.static('assets'))

module.exports = {app,porta}


