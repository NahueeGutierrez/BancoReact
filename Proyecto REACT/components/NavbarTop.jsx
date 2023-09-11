import LinksNav from "./LinksNav";
import Logo from "./Logo";

function NavbarTop() {
    return (  
        <>
            <div className="navbar-top">
                <Logo/>
                <LinksNav/>
            </div>
        </>
    );
}

export default NavbarTop;