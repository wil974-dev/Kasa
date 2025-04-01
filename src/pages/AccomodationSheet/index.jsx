import { useParams } from 'react-router-dom';
import SlideShow from '../../components/SlideShow';
import data from '../../datas/logements.json';
import Collapse from '../../components/Collapse';
import './AccomodationSheet.scss';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import { Navigate } from 'react-router-dom';
/**
 * Page AccomodationSheet
 * C'est la page pour afficher les information sur le logement sélectionner.
 *
 * @returns {JSX.Element} Le JSX du composant AccomodationSheet.
 */
function AccomodationSheet() {
    const { id } = useParams();

    const currentAccomodation = data.find((data) => data.id === id);

    if (!currentAccomodation) {
        return <Navigate to="/Error" />;
    }

    return (
        <>
            <SlideShow
                listPicture={currentAccomodation.pictures}
                title={currentAccomodation.title}
            />
            <div className="accomodation">
                <div className="accomodation__info">
                    <h2 className="accomodation__title">
                        {currentAccomodation.title}
                    </h2>
                    <p className="accomodation__location">
                        {currentAccomodation.location}
                    </p>
                    <div className="accomodation__tag">
                        <Tag tags={currentAccomodation.tags} />
                    </div>
                </div>
                <div className="accomodation__owner">
                    <div className="accomodation__ownerInfo">
                        <p className="accomodation__name">
                            {currentAccomodation.host.name}
                        </p>
                        <img
                            src={currentAccomodation.host.picture}
                            alt="Photo du locataire"
                            className="accomodation__pictureOwner"
                        />
                    </div>

                    <div className="accomodation__rating">
                        <Rating
                            className="accomodation__test"
                            rating={currentAccomodation.rating}
                        />
                    </div>
                </div>
                <div className="accomodation__collapse">
                    <Collapse
                        title="Description"
                        content={currentAccomodation.description}
                    />
                    <Collapse
                        title="Équipements"
                        content={currentAccomodation.equipments}
                    />
                </div>
            </div>
        </>
    );
}

export default AccomodationSheet;
