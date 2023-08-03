import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { AuthContext } from "../../../Contexts/Auth";
import { useContext, useState } from "react";
import Modal from "../Modal/Modal";

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const [modal, setModal] = useState(false);

    const closeModal = () => setModal(false);

    return (
        <nav
            className={
                "navbar navbar-expand navbar-dark shadow fixed-top " +
                classes.navbar
            }
        >
            <div className="container-fluid">
                <Link
                    className="text-decoration-none font-orbitron text-main h4"
                    to="/"
                >
                    <i className="fa-light fa-solar-system fa-beat me-3"></i>
                    ReHacktor
                </Link>

                <div className={classes.navLogo}></div>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/games"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Games
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/genres"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Genres
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
                        {!user && (
                            <li className="nav-item">
                                <NavLink
                                    to="/sign"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Sign
                                </NavLink>
                            </li>
                        )}
                        {user && (
                            <>
                                {modal && (
                                    <Modal
                                        title="Oh no..."
                                        message="Vuoi già lasciarci? Ricorda che ventuali stream in corso saranno interrotti"
                                        declineMessage="Rimani"
                                        confirmMessage="Esci"
                                        closeModal={closeModal}
                                        action={logout}
                                    />
                                )}
                                <li className="nav-item">
                                    <NavLink
                                        to="/profile"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "nav-link text-capitalize active"
                                                : "nav-link text-capitalize"
                                        }
                                    >
                                        <i className="fa-sharp fa-light fa-square-user me-1"></i>
                                        {user.username}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="btn nav-link text-danger"
                                        onClick={() => setModal(!modal)}
                                    >
                                        <i className="fa-duotone fa-person-from-portal fa-lg"></i>
                                    </button>
                                </li>
                            </>
                        )}
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
