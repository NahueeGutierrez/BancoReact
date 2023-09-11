import Facebook from 'images/facebook.png';
import Instagram from 'images/instagram.png';
import Twitter from 'images/twitter.png';
import WhastApp from 'images/whatsapp.png';
function FooterIcons() {
    return (  
        <>
        <div className="footer-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src="images/footer-links/facebook.png" alt="Logo de Facebook"/></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="images/footer-links/instagram.png" alt="Logo de Instagram"/></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src="images/footer-links/twitter.png" alt="Logo de Twitter"/></a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><img src="images/footer-links/whatsapp.png" alt="Logo de WhatsApp"/></a>
          </div>
        </>
    );
}

export default FooterIcons;