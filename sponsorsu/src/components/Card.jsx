function Card({ isFeatured, title, description, tags }) {

    return (
        <div id="card">
            {isFeatured && <span id="featured">Öne Çıkan</span>}
            <h2>{title}</h2>
            <p>{description}</p>
            <span id="tags">
                {tags.map((tag, index) => (
                    <span key={index}>#{tag}</span>))}
            </span>
        </div>
    )
}

export default Card