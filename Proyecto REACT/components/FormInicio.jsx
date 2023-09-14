function FormInicio() {
    return ( 
        <>
        <form className="form" action="">
          <label for="dni"> D.N.I</label>
          <input id="dni" type="number"/>
          <label for="user">Usuario</label>
          <input id="user" type="text"/>
          <label for="password">Contraseña</label>
          <input id="password" type="password"/>
        </form>
        </>
     );
}

export default FormInicio;