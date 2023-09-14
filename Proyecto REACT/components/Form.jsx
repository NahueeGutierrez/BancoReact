function Form() {
    return ( 
    <>
    <form className="form" action=""/>
              <label for="name">Nombre completo</label>
              <input id="name" type="text"/>
              <label for="dni"> D.N.I</label>
              <input id="dni" type="number"/>
              <label for="email">Email</label>
              <input id="email" type="email"/>
              <label for="birth">Fecha de nacimiento</label>
              <input id="birth" type="date"/>
              <label for="user">Cree un usuario</label>
              <input id="user" type="text"/>
              <label for="password">Cree una contraseña</label>
              <input id="password" type="password"/>
              <label for="passwordc">Confirme la contraseña</label>
              <input id="passwordc" type="password"/>
            <form/>
    </>
     );
}

export default Form;