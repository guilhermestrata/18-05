//importar as configurações 
const servidor = require("./config/servidor")
//carregar o express 
const app = servidor.app
//carregar porta
const porta = servidor.porta

const consign = require('consign')
//carregar a rota index
consign().include('./routes').into(app)
//ligar o servidor
app.listen(porta, ()=>{
    console.log('http://localhost:' + porta)
})
