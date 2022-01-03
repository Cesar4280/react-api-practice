import "./Card.css";

export default function Card({ character: { name, image, species } }) {
    return (
        <div className="col">
            <div className="card h-100 shadow border-0">
                <div className="card-header overflow-hidden p-0">
                    <img alt={name} src={image} className="card-img-top" />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{species}</p>
                </div>
            </div>
        </div>
    );
}
