import { Link } from "react-router-dom";

export default function Error() {
    return (
        <>
            <div className="row py-5 px-5 mx-0 text-white text-center">
                <div className="col-12">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3">
                        <span className="text-danger">Opps!</span> Page not
                        found.
                    </p>
                    <p className="lead">
                        The page you're looking for doesn't exist.
                    </p>
                    <Link to={`/`} className="btn btn-danger btn-lg">
                        Home
                    </Link>
                </div>
            </div>
        </>
    );
}
