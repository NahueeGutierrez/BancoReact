import Encabezado from "../../components/Encabezado";
import Footer from "../../components/Footer";
import IndexPagos from "../../components/IndexPagos";

function Pagos() {
    return ( 
        <>
        <header>
            <Encabezado/>
        </header>
        <main>
            <IndexPagos/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>

     );
}

export default Pagos;