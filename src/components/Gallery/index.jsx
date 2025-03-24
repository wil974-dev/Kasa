import Card from '../Card';
import data from '../../datas/logements.json';
import '../../components/Gallery/Gallery.scss';
import { NavLink } from 'react-router-dom';

function Gallery() {
    return (
        <>
            <div className="containerCard">
                {data.map((logement) => (
                    <NavLink
                        to={`/FicheLogement/${logement.id}`}
                        key={logement.id}
                    >
                        <Card
                            key={logement.id}
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
