import Encabezado from "../../components/Encabezado";
import ContMenuActive from "../../components/ContMenuActive";
import InfoTyc from "../../components/InfoTyc";
import Footer from "../../components/Footer";
import 'Tranferencias/src/app.js';
function Tyc() {
  return ( 
    <>
    <header>
      <Encabezado/>
    </header>
    <main>
      <ContMenuActive/>
      <InfoTyc/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
   );
}

export default Tyc;