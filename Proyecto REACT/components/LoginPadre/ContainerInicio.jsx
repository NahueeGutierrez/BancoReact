import FormInicio from "./FormInicio";
import LinkInicio from "./LinkInicio";
function ContainerInicio() {
    return ( 
        <>
        <div className="container">
        <h1>Inicio de sesión</h1>
        <FormInicio/>
        <button className="button">INICIAR SESIÓN</button>
        <LinkInicio/>
      </div>
        </>
     );
}

export default ContainerInicio;