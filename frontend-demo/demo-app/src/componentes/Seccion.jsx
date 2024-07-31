import Formulario from "./Formulario";
import Lista from "./Lista";
import { Routes, Route, Form } from "react-router-dom"
import EditarEstudiante from "./EditarEstudiante";


const Seccion = ()=>{
    return(

       <div className="seccion">
            <Routes>
                <Route path="/" element={ <Formulario /> } />
                <Route path="/estudiantes/editar/:id" element={ <EditarEstudiante /> } />
                <Route path="/lista" element={ <Lista /> } /> 
          </Routes>
       </div>
       
    )
}

export default Seccion; 