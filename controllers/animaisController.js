const ObjectId = require('mongoose').Types.ObjectId;
const Animal = require('../models/animais');

// COMANDOS DE MANIPULAÇÃO DO BANCO
    // -> Listando os dados
    exports.list = async (req,res) => {
        await Animal.find({})
        .exec((err, docs) => {
            res.render('animais/index', { animais:docs, msg: res.msg }) //passando a lista de animais e a mensagem para a pasta index, em views/animais/index
        });
    }

    // -> Cadastrando um animal
    exports.create = (req,res) => {
        //verificando se está enviando o cadastro do animal (post) ou apenas desenhado a página (get)
        if (req.method == "POST"){
            console.log("eNTROU AQUI")
            const animalDocument = new Animal({
                nome: req.params.nome
            });
            console.log("animal");
            animalDocument
            .save()
            .then(result => {
                res.render('animais/create', {msg:'Animal cadastrado com sucesso!'});
            })
            //erro de cadastro
            /*.catch((err) => {
                res.status(500).json({error: err});
            });*/
        }else{
            res.render('animais/create');
        }
    }

