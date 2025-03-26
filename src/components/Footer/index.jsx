import logo from '../../assets/logo/logo_Kasa_blanc.png';
import './Footer.scss';

/**
 * Composant Footer
 * Affiche le pied de page du site, contenant un logo et la mention légale.
 *
 * @returns {JSX.Element} Le JSX du composant Footer.
 */
function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo de kasa" className="footer__logo" />
            <p className="footer__text">
                &copy; 2020 Kasa. All rights reserved
                {/* on utilise entité html */}
            </p>
        </footer>
    );
}
export default Footer;
