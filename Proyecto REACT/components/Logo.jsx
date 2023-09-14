import Logo from 'images/Unknown 4.png';
function Logo() {
    return ( 
        <>
        <section className="logo">
                <p>BANCO</p>
                <p>BARRO</p>
                <img src={Logo}  alt="Logo"/> 
              </section>
        </>
     );
}

export default Logo;