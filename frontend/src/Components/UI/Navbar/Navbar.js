import classes from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav
            className={
                "navbar navbar-expand navbar-dark shadow fixed-top " +
                classes.navbar
            }
        >
            <div className="container-fluid">
                <a
                    className="text-decoration-none font-segoe text-main h4"
                    href="/"
                >
                    <i className="fa-light fa-solar-system fa-beat me-3"></i>
                    ReHacktor
                </a>

                <div className={classes.navLogo}></div>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Link
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Altro Link
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
