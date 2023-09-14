function ContainerPrestamos() {
    return ( 
        <>
        <div className="container">
                <h1>Calcular préstamos</h1>
                <label>Ingresa el monto del préstamo:</label>
    <br/>
                <input type="number" id="monto" />
                <label>Selecciona el plazo en meses:</label>
                <select id="cuotas">
                <option value="12">12 meses</option>
                <option value="18">18 meses</option>
                <option value="24">24 meses</option>
                </select>
    <br/>
                <button className="button" onclick="calcular()">Calcular</button>
                <p id="resultado"></p>
    <br/>
                <p className="cursiva">La tasa de interes semestral es de un 118%</p>
            </div>
        </>
     );
}

export default ContainerPrestamos;