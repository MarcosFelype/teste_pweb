//REQUISIÇÃO DE MÓDULOS
    const mongoose = require('mongoose');

//CRIANDO O MODEL
    const Schema = mongoose.Schema; //criando a variável de esquema, é o que permite a criação do model
    const opts = {
        toJSON: {
            vituals: true
        }
    }

    const AnimaisSchema = new Schema({
        nome: {
            type: String,
            required: true
        }
    },
        opts
    );

//ENVIANDO O MODEL
    AnimaisSchema.virtual("url").get(() => {
        return `/animais/${this._id}`;
    });

    module.exports = mongoose.model("animais", AnimaisSchema, "animais");
    


