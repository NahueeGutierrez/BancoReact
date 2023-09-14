import Encabezado from "../../components/Encabezado";
import Footer from "../../components/Footer";
import PrestamosDolar from "../../components/PrestamosDolar";
import './app.js';
function ConvertidorDolar() {
    return ( 
        <>
        <header>
            <Encabezado/>
        </header>
        <main>
            <PrestamosDolar/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default ConvertidorDolar;