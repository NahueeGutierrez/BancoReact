import Encabezado from "../../components/Encabezado";
import Footer from "../../components/Footer";
import IndexPrincipal from "../../components/IndexPrincipal";

function Index() {
    return ( 
        <>
        <header>
            <Encabezado/>
        </header>
        <main>
            <IndexPrincipal/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default Index;