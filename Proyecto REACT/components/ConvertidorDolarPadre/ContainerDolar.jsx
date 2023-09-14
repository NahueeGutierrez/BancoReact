function ContainerDolar() {
    return ( 
        <>
        <div className="container">
            <h1 className="textoPesoDolar">Convertidor de Moneda:</h1>
            <h2>Peso argentino/Dólar</h2>
            <label>Ingresa la cantidad:</label>
    <br/>
            <input type="number" id="cantidad"/>
            <label>Selecciona la moneda:</label>
            <select id="moneda">
                <option value="pesoArg">PESO ARG</option>
                <option value="dolar">USD</option>
            </select>
    <br/>
            <button className="button" onclick="convertir()">Convertir</button>
            <p id="resultado"></p>
            <a href="convertidorEuro.html">Convertír peso argentino/euro.</a>
            </div>
        </>
     );
}

export default ContainerDolar;