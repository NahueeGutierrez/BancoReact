import ContMenuActive from "../../components/ContMenuActive";
import Encabezado from "../../components/Encabezado";
import Footer from "../../components/Footer";
import InfoPolitica from "../../components/InfoPolitica";
import 'Tranferencias/src/app.js';
function Politicas() {
    return (  
        <>
        <header>
            <Encabezado/>
        </header>
        <main>
            <ContMenuActive/>
            <InfoPolitica/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    );
}

export default Politicas;