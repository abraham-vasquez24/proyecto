const mongoose = require('mongoose');

const { Schema } = mongoose;

const usuarioSchema = new Schema({
    
    nombre:{
        type:String,
        trim:true
    },

    apellido:{
        type:String,
        trim:true
    },

    edad:{
        type:String,
        trim:true
    },

    email:{
        type:String,
        trim:true,
        unique:true,
        lowercase:true
    },

    telefono:{
        type:String,
        trim:true,
    },

    especialidad:{
        type:String,
        trim:true,
        lowercase:true
    },

    forma_pago:{
        type:String,
        trim:true,
    },

    monto:{
        type:Number,
        trim:true,
    }
})

const modeloUsuario = mongoose.model('modeloUsuario', usuarioSchema);

module.exports = modeloUsuario;