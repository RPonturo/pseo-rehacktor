import { NavLink } from "react-router-dom";
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
                    className="text-decoration-none font-orbitron text-main h4"
                    href="/"
                >
                    <i className="fa-light fa-solar-system fa-beat me-3"></i>
                    ReHacktor
                </a>

                <div className={classes.navLogo}></div>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/search"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Search
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/xyz"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                TryMe
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/credits"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Credits
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
