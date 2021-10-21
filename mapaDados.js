const Sequelize = require('sequelize')
const database = require('./db')

const MapaDados = database.define('mapaDados',{
    // id:{
    //     type:Sequelize.INTEGER,
    //     autoIncrement: true,
    //     allownull:false,
    //     primarykey:true
    // },
    nome:{
        type:Sequelize.STRING,
        allownull:false
    },
    latitude:{
        type: Sequelize.STRING,
        allownull:false
    },
    longitude:{
        type:Sequelize.STRING,
        allownull:false
    },
    descricao: Sequelize.STRING
})
module.exports= MapaDados