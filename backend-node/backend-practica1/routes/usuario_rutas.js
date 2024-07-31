const express = require('express');
const router = express.Router();

const { agregarUsuario, optenerUsuarios, usuarioId, actualizarUsuario, eliminarUsario } = require('../controllers/usuario_controladores.js')

module.exports = function () {
    
    //Agrega nuevos estudiantes via post
    router.post('/usuarios', agregarUsuario);


    //Muestra todos los estudiantes
    router.get('/usuarios', optenerUsuarios)


    //Muestra un estudiante en especifico (ID)
    router.get('/usuarios/:idusuario', usuarioId)

    //Actualizar usuario
    router.put('/usuarios/:idusuario', actualizarUsuario)

    //Eliminar usuario (id)

    router.delete('/usuarios/:idusuario', eliminarUsario)
    return router
}
