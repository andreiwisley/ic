const Sequelize = require('sequelize')
const sequelize = new Sequelize('IniciacaoCientifica', 'root', 'W5y=T*K*',{
    dialect:'mysql',
    host:'localhost',
    port: 3306
})
module.exports= sequelize
