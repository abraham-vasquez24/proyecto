const express = require('express');
const cors = require('cors');   
const routes = require('./routes/usuario_rutas.js')
const mongoose = require('mongoose');

// Creamos el servidor
const app = express();

mongoose.connect('mongodb://localhost/datos-estudiantes', {useNewUrlParser : true})


// usaremos json para enviar y recibir informacion en este formato
app.use(express.json());
// Nos permitira recibir datos del body del cliente en formato json
app.use(express.urlencoded({extended:true}))

app.use(cors());
// usaremos las rutas definidas en el directorio routes
app.use(routes());

// creamos el puerto
const puerto = 5000;


// levantamos el servidor
app.listen(puerto, ()=>{
    console.log('Servidor escuchando en el puerto ', puerto);
})