import './Card.scss';

function handleClick(id) {
    console.log(id);
}

function Card({ cover, title, id }) {
    return (
        <div className="card" onClick={() => handleClick(id)}>
            <img src={cover} alt={title} className="card__img" />
            <h2 className="card__title">{title}</h2>
        </div>
    );
}

export default Card;
