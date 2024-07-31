import { useEffect, useState } from "react";
import usuarioAxios from "../config/axios";
import Estudiantes from "./Estudiantes";

const Lista = ()=>{
    
    const [estudiantes, guardarEstudiantes] = useState([]);

    const consultaApi = async ()=>{
        const estudiantesConsulta = await usuarioAxios.get('/usuarios')

        //colocar el resultado en el estate 
        guardarEstudiantes(estudiantesConsulta.data)
        
        
    }

    useEffect(()=>{
        consultaApi();
    },[])


    return(

        <div>
          
            <h1>Lista de Estudiantes</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>Especialidad</th>
                            <th>Forma de pago</th>
                            <th>Monto</th>
                            <th>Acciones</th>
                            
                        </tr>
                    </thead>
                    {estudiantes.map(estudiante =>{
                return(
                    <Estudiantes estudiante={estudiante} key={estudiante._id}></Estudiantes>
                    
                )
           })}
                </table>

           
        </div>

    )
}

export default Lista;