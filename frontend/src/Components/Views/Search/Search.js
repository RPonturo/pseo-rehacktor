import { useContext, useEffect, useState } from "react";
import classes from "./Search.module.css";
import GenresList from "../../UI/GenresList/GenresList";
import { ConfigContext } from "../../../Contexts/Config";

export default function Search() {
    let { api_urls, api_secrets } = useContext(ConfigContext);
    const [genres, setGenres] = useState(null);

    useEffect(() => {
        fetch(`${api_urls.games}/api/genres?key=${api_secrets.games}`)
            .then((response) => response.json())
            .then((data) => setGenres(data.results));
    }, [api_urls.games, api_secrets.games]);
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
