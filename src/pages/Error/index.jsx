import { NavLink } from 'react-router-dom';
import './Error.scss';

/**
 * Page Error
 * Affiche la page "error" lorsqu'une mauvaise url ou une page inexistante est saisie.
 *
 * @returns {JSX.Element} Le JSX du composant Error.
 */
function Error() {
    return (
        <div className="error">
            <h2 className="error__title">404</h2>
            <h3 className="error__info">
                Oups ! La page que vous demandez n'existe pas
            </h3>
            <NavLink to="/" className="error__link">
                Retourner sur la page d'accueil
            </NavLink>
        </div>
    );
}

export default Error;
