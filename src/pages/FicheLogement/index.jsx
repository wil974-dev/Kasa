import { useParams } from 'react-router-dom';
import SlideShow from '../../components/SlideShow';
import data from '../../datas/logements.json';

function FicheLogement() {
    const { id } = useParams();
    const currentAccomodation = data.find((data) => data.id === id);
    return (
        <>
            <SlideShow
                listPicture={currentAccomodation.pictures}
                title={currentAccomodation.title}
            />
        </>
    );
}

export default FicheLogement;
