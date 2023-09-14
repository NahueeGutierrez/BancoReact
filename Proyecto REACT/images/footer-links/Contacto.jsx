import ContMenuActive from "../../components/ContMenuActive";
import Encabezado from "../../components/Encabezado";
import Footer from "../../components/Footer";
import InfoContacto from "../../components/InfoContacto.jsx";
import 'Tranferencias/src/app.js';
function Contacto() {
    return ( 
        <>
        <header>
            <Encabezado/>
        </header>
        <main>
            <ContMenuActive/>
            <InfoContacto/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default Contacto;