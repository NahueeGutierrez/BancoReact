import Encabezado from "../../components/Encabezado";
import Footer from "../../components/Footer";
import Prestamos from "../../components/Prestamos";
import './app.js';
function Prestamos() {
    return ( 
        <>
        <header>
            <Encabezado/>
        </header>
        <main>
            <Prestamos/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default Prestamos;