import fondBannerRivage from '../../assets/image/fond_banner_rivage.png';
import './Banner.scss';

function Banner() {
    return (
        <div className="banner">
            <img
                src={fondBannerRivage}
                alt="Image d'un rivage sauvage"
                className="banner__img"
            />
            <h1 className="banner__titre">Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;
