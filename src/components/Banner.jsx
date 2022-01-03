export default function Banner({ title }) {
    return (
        <div className="container py-5 text-center">
            <h1 className="fw-bold display-3 text-info py-4">
                { title }
            </h1>
        </div>
    )
}
