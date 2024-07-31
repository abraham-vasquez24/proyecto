import { useState, useEffect } from "react";
import usuarioAxios from '../config/axios.js'

const EditarEstudiante = (props)=>{

    // const { id } = props.match.params;
   
    // console.log(id);
    const [estudiantes, guardarEstudiantes] = useState({

        nombre:"",
        apellido:"",
        edad:"",
        email:"",
        telefono:"",
        especialidad:"",
        forma_pago:"",
        monto:""
    });

    // const consultarApi = async()=>{
    //     const estudiantesConsulta = await usuarioAxios.get(`/usuarios/${id}`)
    //     console.log(estudiantesConsulta.data);
    // }

    // useEffect(()=>{
    //     consultarApi()
    // },[])

    const actualizarState = e =>{
        guardarEstudiantes({
            ...estudiantes,
            [e.target.name] : e.target.value
        })

        console.log(estudiantes);
    }

    // const agregarEstudiante = e =>{
    //     e.preventDefault();

    //     usuarioAxios.post('/usuarios', estudiantes)
    //         .then(res =>{
    //             console.log(res);
    //         })
            
    //     alert("Estudiante Agregado")    
    // }

    return(
        <div className="container">
            <h1>Editar informacion de los estudiantes</h1>
                <form >
                    <label >Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required onChange={actualizarState}></input>

                    <label >Apellido:</label>
                    <input type="text" id="apellido" name="apellido" required onChange={actualizarState}></input>

                    <label >Edad:</label>
                    <input type="text" id="edad" name="edad" min="0" required onChange={actualizarState}></input>

                    <label >Email:</label>
                    <input type="email" id="email" name="email" required onChange={actualizarState}></input>

                    <label >Telefono:</label>
                    <input type="text" id="telefono" name="telefono" required onChange={actualizarState}></input>

                    <label >Especialidad:</label>
                    <input type="text" id="especialidad" name="especialidad" required onChange={actualizarState}></input>

                    <label >Forma de pago Banco:</label>
                    <input type="text" id="banco" name="forma_pago" required onChange={actualizarState}></input>

                    <label >Monto:</label>
                    <input type="text" id="monto" name="monto" required onChange={actualizarState}></input>

                    <button type="submit">Enviar</button>
                </form>
        </div>
    )   
}

export default EditarEstudiante;