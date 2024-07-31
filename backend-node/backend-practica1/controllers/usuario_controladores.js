const { json } = require('express');
const usuarioModelo = require('../models/usuario_model.js');


//Crea nuevos estudiantes
const agregarUsuario = async (req, res, next)=>{

    const nuevoUsuario = new usuarioModelo(req.body)

    try {
        // almacenar el registro
        await nuevoUsuario.save();
        res.json({mensaje:'Se agrego un nuevo estudiante'})
    } catch (error) {
        
        console.log(error);
        next();
    }
}


// Muestra todos los estudiantes
const optenerUsuarios = async (req, res, next)=>{
    try {

        const LLamarusuarios = await usuarioModelo.find({});
        res.json(LLamarusuarios)
        
    } catch (error) {
        console.log(error);
        next();
    }
}


//Muestra 1 usuario en especifico
const usuarioId = async(req, res, next)=>{
    const usuario = await usuarioModelo.findById(req.params.idusuario)

    if (!usuarioId) {
        res.json({mensaje:'Ese usuario no existe'})
        next();
    }

    res.json(usuario)
}

//Mostrar 1 usuario (id)

const actualizarUsuario = async(req, res, next)=>{
    try {
        const usuario = await usuarioModelo.findOneAndUpdate({ _id : req.params.idusuario}, 
            
            req.body,{
                 new:true
        });

        res.json(usuario)
    } catch (error) {
        console.log(error);
        next();
    }
}


const eliminarUsario = async(req, res, next)=>{

    try {
        await usuarioModelo.findOneAndDelete({_id:req.params.idusuario})
        res.json({mensaje:'El estudiante se ah eliminado'})
    } catch (error) {
        console.log(error);
        next()
    }
}

module.exports = {agregarUsuario, optenerUsuarios, usuarioId, actualizarUsuario, eliminarUsario}