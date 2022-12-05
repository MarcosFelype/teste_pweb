const express = require('express');
const route = express.Router();

route.get("/", (req, res, next) => {
    res.send('<h1> Aqui serão colocados usuários </h1>');
});

//EXPORTANDO O MÓDULO PARA SER UTILIZADO EM APP.JS
    module.exports = route;