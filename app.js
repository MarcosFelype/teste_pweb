//REQUISÇÃO DOS MÓDULOS
    const express = require('express');
    const mongoose = require('mongoose');
    const path = require('path');
    // urlMongo 
        //professor
            //const urlMongo = `mongodb+srv://${process.env.USER_MONGO}:${process.env.PASSWORD_MONGO}@cluster0.jqvpq.mongodb.net/pweb?retryWrites=true&w=majority`;
        //minha (sem o arquivo .env)
            const urlMongo = `mongodb+srv://admin:a1b2c3d4@cluster0.bp0h9jk.mongodb.net/?retryWrites=true&w=majority`;
    const app = express();

//CONFIGURAÇÕES
    //Banco
        mongoose.connect(urlMongo, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const dbConnection = mongoose.connection;
        dbConnection.on("error", console.error.bind(console,"Erro na conexão ao mongoDB"));
    //Outras
        app.set('views', path.join(__dirname,'views')); //possivelmente está definindo que utilizarei a pasta views para renderizar as páginas
        app.set('view engine', 'pug'); //indica que utilizarei arquivos do tipo .pug como template engine
//UTILIZANDO AS ROTAS
    const animaisRoute = require('./routes/animais');
    const indexRoute = require('./routes/index');
    const usersRoute = require('./routes/users');

    app.use('/', indexRoute);
    app.use('/animais', animaisRoute);
    app.use('/users', usersRoute);


//OUTRAS CONFIGS
    const PORT = 3000;
    //app.listen() deve ser a última função de app.js
    app.listen(PORT, () =>{
        console.log("Servidor rodando na porta "+PORT+ "...");
    })


