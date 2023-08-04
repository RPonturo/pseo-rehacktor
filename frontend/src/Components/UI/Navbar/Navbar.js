import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { AuthContext } from "../../../Contexts/Auth";
import { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import useToggle from "../../../Hooks/useToggle";

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const [modal, setModal] = useState(false);
    const [menu, setMenu] = useToggle(false);
    const closeModal = () => setModal(false);

    return (
        <nav
            className={
                "navbar navbar-expand-lg navbar-dark shadow fixed-top " +
                classes.navbar +
                (menu
                    ? ` border-bottom border-danger ${classes.navbarMobile}`
                    : "")
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

                <div
                    className={classes.navLogo + (menu ? " d-none" : "")}
                ></div>

                <button
                    onClick={setMenu}
                    className={`navbar-toggler rounded-0 ${classes["navbar-togglerMy"]}`}
                    aria-controls="navbarNav"
                    aria-expanded={menu}
                    type="button"
                    aria-label="Toggle navigation"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                >
                    <span
                        className={`navbar-toggler-icon ${classes["navbar-toggler-iconMy"]}`}
                    ></span>
                </button>

                <div
                    className={
                        "collapse navbar-collapse mt-3 ms-3 " +
                        (menu ? "show" : "")
                    }
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/games"
                                onClick={setMenu}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                <i className="fa-fw fa-thin fa-alien-8bit me-1"></i>
                                Games
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/genres"
                                onClick={setMenu}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                <i className="fa-fw fa-sharp fa-light fa-alien me-1"></i>
                                Genres
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/search"
                                onClick={setMenu}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                <i className="fa-fw fa-thin fa-magnifying-glass me-1"></i>
                                Search
                            </NavLink>
                        </li>
                        {!user && (
                            <li className="nav-item">
                                <NavLink
                                    to="/sign"
                                    onClick={setMenu}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    <i className="fa-fw fa-thin fa-right-to-bracket me-1"></i>
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
                                        onClick={setMenu}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "nav-link text-capitalize active"
                                                : "nav-link text-capitalize"
                                        }
                                    >
                                        <i className="fa-fw fa-sharp fa-light fa-square-user me-1"></i>
                                        {user.username}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="btn nav-link "
                                        onClick={() => setModal(!modal)}
                                    >
                                        <i className="fa-fw fa-duotone fa-person-from-portal me-1"></i>
                                        Esci
                                    </button>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <NavLink
                                to="/xyz"
                                onClick={setMenu}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                <i className="fa-fw fa-sharp fa-light fa-square-question me-1"></i>
                                TryMe
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/credits"
                                onClick={setMenu}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                <i className="fa-fw fa-sharp fa-light fa-square-info me-1"></i>
                                Credits
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
