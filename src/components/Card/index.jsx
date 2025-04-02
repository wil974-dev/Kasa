import './Card.scss';

/**
 * Composant Card
 * Affiche une carte avec une photo et un titre.
 *
 * @param {Object} props - Les propriétés du composant Card.
 * @param {string} props.cover - L'url de l'image à afficher.
 * @param {string} props.title - Le titre de l'image pour l'attribut alt et l'affiche sur la carte.
 * @returns {JSX.Element} Le JSX du composant Card.
 */
function Card({ cover, title }) {
    return (
        <div className="card">
            <img src={cover} alt={title} className="card__img" />
            <h2 className="card__title">{title}</h2>
        </div>
    );
}

export default Card;
