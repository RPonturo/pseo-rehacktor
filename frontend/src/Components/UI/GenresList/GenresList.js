import { NavLink } from "react-router-dom";
import classes from "./GenresList.module.css";

export default function GenresList(props) {
    return (
        <div className={classes["genres-wrapper"] + " px-2"}>
            {props.data.map((genre) => (
                <NavLink
                    className="text-decoration-none"
                    to={`/search/${genre.slug}/1`}
                    key={genre.id}
                >
                    {({ isActive }) => (
                        <button
                            className={
                                "btn btn-dark btn-outline-danger rounded-0 d-block w-100 text-start mb-2 " +
                                (isActive ? `${classes["genres-active"]}` : "")
                            }
                            key={genre.id}
                        >
                            {genre.name}
                        </button>
                    )}
                </NavLink>
            ))}
        </div>
    );
}
