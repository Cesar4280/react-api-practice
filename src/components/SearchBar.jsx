export default function SearchBar({ value, onChange }) {
    return (
        <div className="input-group shadow-sm">
            <input
                type="search"
                name="nombre"
                value={value}
                onChange={onChange}
                className="form-control border-0 bg-light shadow-sm p-2"
                placeholder="Ingrese personaje" />
            <button
                type="submit"
                className="btn btn-secondary input-group-text">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    className="bi bi-search">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </button>
        </div>
    );
}
