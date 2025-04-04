import Card from '../Card';
import data from '../../datas/logements.json';
import '../../components/Gallery/Gallery.scss';
import { NavLink } from 'react-router-dom';

/**
 * Composant Gallery
 * Affiche une grille de cartes représentant les logements, chacune étant cliquable pour accéder à sa page de détails.
 * @returns {JSX.Element} - Le JSX du composant Gallery.
 */
function Gallery() {
    return (
        <>
            <div className="containerCard">
                {data.map((logement) => (
                    <NavLink
                        to={`/AccomodationSheet/${logement.id}`}
                        key={logement.id}
                    >
                        <Card
                            cover={logement.cover}
                            title={logement.title}
                            id={logement.id}
                        />
                    </NavLink>
                ))}
            </div>
        </>
    );
}

export default Gallery;
