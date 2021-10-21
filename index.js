(async()=>{
    const database= require('./db')
    const MapaDados = require ('./mapaDados')
    await database.sync()

    // cria um novo ponto no mapa
    const novoMapaDados = await MapaDados.create({     
        id:2 ,
        nome: 'Catedral Imaculada Conceição',
        latitude: '-22.22874',
        longitude: '-54.81041' ,
        descricao:' A paróquia da Imaculada Conceição foi fundada no dia 03 de outubro de 1935, pelo bispo de Corumbá, Dom Vicente B. Maria Priante'

    })
    console.log(novoMapaDados)

    //mostra a lista de todos os pontos criados que estão no BD

    const listaDePontos = await MapaDados.findAll() 
    console.log (listaDePontos)

    // await MapaDados.destroy({where:{
    //     id:9
        
    // }})
   

})()