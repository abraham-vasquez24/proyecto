import './estilosLista.css'
import { Link } from 'react-router-dom'
const Estudiantes = ({estudiante})=>{

    const {_id,nombre,apellido,edad,telefono,email,especialidad,forma_pago,monto} = estudiante
    return(
        <>
                
               
                    <tbody>
                        <tr>
                            <td>{nombre}</td>
                            <td>{apellido}</td>
                            <td>{edad}</td>
                            <td>{email}</td>
                            <td>{telefono}</td>
                            <td>{especialidad}</td>
                            <td>{forma_pago}</td>
                            <td>{monto}</td>
                            <td>

                            <Link to={`/estudiantes/editar/${_id}`}> <button class="edit-button" onclick="editStudent('1')">Editar</button></Link>
                               
                                <button class="delete-button" onclick="deleteStudent('1')">Eliminar</button>
                            </td>
                        </tr>
                       
                       
                    </tbody>
              
        </>
    )   
}

export default Estudiantes;