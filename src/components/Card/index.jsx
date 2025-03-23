import './Card.scss';

function Card({ cover, title }) {
    return (
        <div className="card">
            <img src={cover} alt={title} className="card__img" />
            <h2 className="card__title">{title}</h2>
        </div>
    );
}

export default Card;
