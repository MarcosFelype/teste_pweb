//REQUISIÇÃOD DE MÓDULOS
    const express = require('express');
    const route = express.Router();
    const animaisController = require('../controllers/animaisController');

    /*route.get("/", (req, res, next) => {
        res.send("Página de animais");
    });*/

    route.get("/", animaisController.list);
    route.get("/create", animaisController.create);
    route.post("/create", animaisController.create);

//EXPORTANDO O MÓDULO PARA SER UTILIZADO EM APP.JS
    module.exports = route;
