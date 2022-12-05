const express = require('express');
const route = express.Router();

route.get("/", (req, res, next) => {
    res.render('index', {title: 'Site de animais do Felype'});
});

//EXPORTANDO O MÓDULO PARA SER UTILIZADO EM APP.JS
    module.exports = route;