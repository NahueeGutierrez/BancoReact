import Encabezado from "../../components/Encabezado";
import Footer from "../../components/Footer";
import PrestamosEuro from "../../components/PrestamosEuro";
import './app.js';
function ConvertidorEuro() {
    return (
         <>
         <header>
            <Encabezado/>
         </header>
         <main>
            <PrestamosEuro/>
         </main>
         <footer>
            <Footer/>
         </footer>
         </>
          );
}

export default ConvertidorEuro;