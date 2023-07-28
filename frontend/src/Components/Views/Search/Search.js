import { useEffect, useState } from "react";
import classes from "./Search.module.css";
import GenresList from "../../UI/GenresList/GenresList";
import Card from "../../UI/Card/Card";

export default function Search() {
    const [genres, setGenres] = useState(null);
    useEffect(() => {
        fetch(
            "https://api.rawg.io/api/genres?key=b89bcc2793194ab7a4e75876c96e1fe3"
        )
            .then((response) => response.json())
            .then((data) => setGenres(data.results));
    }, []);
    return (
        <div
            className={
                "container-fluid my-5 py-5 min-vh-100 " + classes["bg-info"]
            }
        >
            <div className="row my-5">
                <div className="col-12 col-md-3 col-lg-2">
                    {genres && <GenresList data={genres} />}
                </div>
                <div className="col-12 col-md-9 col-lg-10"></div>
            </div>
        </div>
    );
}
