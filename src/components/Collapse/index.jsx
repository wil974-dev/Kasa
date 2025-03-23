import { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        isOpen === true ? setIsOpen(false) : setIsOpen(true);
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
                <p
                    className={
                        isOpen === false
                            ? 'collapse__content'
                            : 'collapse__content collapse__content--open'
                    }
                >
                    {content}
                </p>
            </div>
        </>
    );
}

export default Collapse;
