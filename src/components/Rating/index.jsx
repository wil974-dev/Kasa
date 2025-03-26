import starFull from '../../assets/logo/star_full.png';
import starVoid from '../../assets/logo/star_void.png';
import './Rating.scss';

function Rating(props) {
    const stars = [0, 1, 2, 3, 4];

    return (
        <div className="rating">
            {stars.map((star) =>
                props.rating - 1 > stars[star] ? (
                    <img src={starFull} alt="étoile pleine" key={star} />
                ) : (
                    <img src={starVoid} alt="étoile vide" key={star} />
                )
            )}
        </div>
    );
}

export default Rating;
