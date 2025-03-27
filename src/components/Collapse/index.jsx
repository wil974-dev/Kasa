import { useState } from 'react';
import './Collapse.scss';

/**
 * Composant Collapse
 * Affiche une menu déroulante qui s'ouvre et se ferme en réaction au clic.
 *
 * @param {Object} props - Les propriétés du composant Collapse.
 * @param {string} props.title - Le titre du menu déroulant.
 * @param {string} props.content - Le contenu du menu déroulant.
 * @returns {JSX.Element} Le JSX du composant Collapse.
 */
function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        isOpen === true ? setIsOpen(false) : setIsOpen(true);
    }
    /**
     * Fonction pour afficher le contenu en fonction du titre.
     * Soit en liste si le titre est "Équipements" sinon il retourne le
     * contenu normalement.
     *
     * @returns Retourne le contenue agencer en fonction de son contenu.
     */
    function printList() {
        if (title === 'Équipements') {
            return (
                <ul>
                    {content.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            );
        } else {
            return <>{content}</>;
        }
    }

    return (
        <>
            <div className="collapse" onClick={handleClick}>
                <div className="collapse__header">
                    <h2 className="collapse__title">{title}</h2>
                    <i
                        className={
                            isOpen === false
                                ? 'collapse__chevron fa-solid fa-chevron-up'
                                : 'collapse__chevron collapse__chevron--open fa-solid fa-chevron-up'
                        }
                    ></i>
                </div>
                <div
                    className={
                        isOpen === false
                            ? 'collapse__content'
                            : 'collapse__content collapse__content--open'
                    }
                >
                    {printList()}
                </div>
            </div>
        </>
    );
}

export default Collapse;
