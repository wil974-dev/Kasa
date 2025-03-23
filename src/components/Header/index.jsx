import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo_Kasa.png';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo de Kasa" className="header__logo" />
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'header__link header__link--active'
                                    : 'header__link'
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink
                            to="/APropos"
                            className={({ isActive }) =>
                                isActive
                                    ? 'header__link header__link--active'
                                    : 'header__link'
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
