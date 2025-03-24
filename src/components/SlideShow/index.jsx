import arrowRight from '../../assets/logo/arrow_right.png';
import arrowLeft from '../../assets/logo/arrow_left.png';
import { useState } from 'react';
import './SlideShow.scss';

function SlideShow({ listPicture, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = listPicture.length;

    const arrowNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === total - 1 ? 0 : prevIndex + 1
        );
    };
    const arrowPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? total - 1 : prevIndex - 1
        );
    };
    return (
        <>
            <div className="slideshow">
                <img
                    src={listPicture[currentIndex]}
                    alt={title}
                    className="slideshow__img"
                />

                {total > 1 && (
                    <>
                        <button
                            aria-label="précédent"
                            onClick={arrowPrevious}
                            className="slideshow__arrowleft"
                            tabIndex="0"
                        >
                            <img
                                src={arrowLeft}
                                alt="précédent"
                                className="slideshow__chevronLeft"
                            />
                        </button>
                        <button
                            aria-label="suivant"
                            onClick={arrowNext}
                            className="slideshow__arrowright"
                            tabIndex="0"
                        >
                            <img
                                src={arrowRight}
                                alt="suivant"
                                className="slideshow__chevronRight"
                            />
                        </button>
                        <p className="slideshow__number">
                            {currentIndex + 1}/{total}
                        </p>
                    </>
                )}
            </div>
        </>
    );
}

export default SlideShow;
