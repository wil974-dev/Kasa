import logo from '../../assets/logo/logoKasa.png';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo de Kasa" className="header__logo" />
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">Acceuil</li>
                    <li className="header__item">A Propos</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
