import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import FondBannerRivage from '../../assets/image/Fond_banner_rivage.png';

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
