import './Banner.scss';

function Banner({ img, descriptionImg, title }) {
    return (
        <div className="banner">
            <img src={img} alt={descriptionImg} className="banner__img" />
            <h1 className="banner__titre">{title}</h1>
        </div>
    );
}

export default Banner;
