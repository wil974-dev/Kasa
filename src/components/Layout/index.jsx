import Header from '../Header';
import Footer from '../Footer';
import './Layout.scss';

/**
 * Composant Layout
 * Le layout pour les pages du site.
 * @param {Object} props - Les propriétés du composant Layout.
 * @param {JSX.Element} props.children - Le contenue à afficher dans la page principal.
 * @returns {JSX.Element} Le JSX du composant Layout.
 */
function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
