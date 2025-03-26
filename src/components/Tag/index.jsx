import './Tag.scss';

function Tag(props) {
    return (
        <div className="tags">
            {props.tags.map((tags, index) => (
                <div key={index} className="tags__element">
                    {tags}
                </div>
            ))}
        </div>
    );
}

export default Tag;
