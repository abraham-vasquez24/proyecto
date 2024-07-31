const Loguin = ()=>{
    return(
        <div className="container">
                <h1>Registro de Usuario</h1>
                <form action="" className="formulario-registro">

                <label for="username">Nombre de Usuario</label>
                <input type="text" id="username" name="username" required></input>
                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required></input>

                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" required></input>
                <button type="submit">Registrarse</button>
                </form>
        </div>
    )
}

export default Loguin;