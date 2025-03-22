import logo from '../../assets/logo/logoKasaBlanc.png';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo de kasa" className="footer__logo" />
            <p className="footer__text">
                &copy; 2020 Kasa. All rights reserved
                {/* ℹ️ on utilise entité html */}
            </p>
        </footer>
    );
}
export default Footer;
