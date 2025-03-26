import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import FondBannerRivage from '../../assets/image/Fond_banner_rivage.png';

/**
 * Page Home
 * Affiche la page d'accueil du site avec la liste des appartements.
 *
 * @returns {JSX.Element} le JSX du composant Home.
 */
function Home() {
    return (
        <>
            <Banner
                img={FondBannerRivage}
                descriptionImg="Rivage sauvage"
                title="Chez vous, partout et ailleurs"
            />
            <Gallery />
        </>
    );
}

export default Home;
