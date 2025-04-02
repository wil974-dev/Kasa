import './Banner.scss';

/**
 * Composant Banner
 * Affiche une bannière avec une image et un titre (facultatif).
 *
 * @param {Object} props - Les propriétés du composant Banner.
 * @param {string} props.img - La source de l'image à afficher.
 * @param {string} props.descriptionImg - La description de l'image pour l'attribut alt.
 * @param {string} [props.title] - Le titre de la bannière (facultatif).
 * @returns {JSX.Element} Le JSX du composant Banner.
 */
function Banner({ img, descriptionImg, title }) {
    return (
        <div className="banner">
            <img src={img} alt={descriptionImg} className="banner__img" />
            {/*Affiche le titre que si il est renseigner. */}
            {title && <h1 className="banner__titre">{title}</h1>}
        </div>
    );
}

export default Banner;
