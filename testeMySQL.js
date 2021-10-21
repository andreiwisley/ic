const Sequelize = require('sequelize')
const sequelize = new Sequelize ('ic', 'root', 'W5y=T*K*', {
    host: "localhost",
    dealect: 'mysql'
} ) 
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar!"+erro)
})