import registroIcono from '../imagenes/icono-registro.png'
import usuariosIcono from '../imagenes/icono-usuarios.png'
import pagosIcono  from '../imagenes/icono-pagos.png'

import { Link } from 'react-router-dom'

const Menu = ()=>{
    return(
        <div className="menu">
            <ul className="menu-lista">

                <div className="cont-icono">
                     <img src={registroIcono}/><Link to="/">Registro</Link>
                </div>


                <div className="cont-icono">
                   <img src={usuariosIcono}/><Link to="/lista">Lista de estudiantes</Link>
                </div>
                

                <div className="cont-icono">
                   <img src={pagosIcono}/><Link to="/pagos">Pagos</Link>
                </div>
            </ul>
        </div>
    )
}

export default Menu;