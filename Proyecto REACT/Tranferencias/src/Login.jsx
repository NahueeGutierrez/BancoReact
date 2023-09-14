import Encabezado from "../../components/Encabezado";
import Footer from "../../components/Footer";
import ContainerInicio from "../../components/LoginPadre/ContainerInicio";
function Login() {
    return ( 
        <>
        <header>
            <Encabezado/>
        </header>
        <main>
            <ContainerInicio/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}
export default Login;