import Card from '../Card';
import data from '../../datas/logements.json';
import '../../components/Gallery/Gallery.scss';

function Gallery() {
    return (
        <>
            <div className="containerCard">
                {data.map((logement) => (
                    <Card
                        key={logement.id}
                        cover={logement.cover}
                        title={logement.title}
                    />
                ))}
            </div>
        </>
    );
}

export default Gallery;
