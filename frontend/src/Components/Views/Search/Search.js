import { useContext, useEffect, useState } from "react";
import classes from "./Search.module.css";
import GenresList from "../../UI/GenresList/GenresList";
import { ConfigContext } from "../../../Contexts/Config";
import { Link, useParams } from "react-router-dom";
import Card from "../../UI/Card/Card";
import Loader from "../../UI/Loader/Loader";

export default function Search() {
    let { api_urls, api_secrets } = useContext(ConfigContext);
    let { genre, num } = useParams();
    const [genres, setGenres] = useState(null);
    const [games, setGames] = useState(null);
    const [searched, setSearched] = useState("");

    useEffect(() => {
        fetch(`${api_urls.games}/api/genres?key=${api_secrets.games}`)
            .then((response) => response.json())
            .then((data) => setGenres(data.results));
    }, [api_urls.games, api_secrets.games]);

    useEffect(() => {
        if (!num) return;
        fetch(
            `${api_urls.games}/api/games?key=${api_secrets.games}&genres=${genre}&page=${num}&page_size=12`
        )
            .then((response) => response.json())
            .then((data) => {
                setGames(data.results);
            });
    }, [api_urls.games, api_secrets.games, genre, num]);

    useEffect(() => {
        if (searched.length > 4) {
            fetch(
                `${api_urls.games}/api/games?key=${api_secrets.games}&page_size=24&search=${searched}&search_precise=true`
            )
                .then((response) => response.json())
                .then((data) => {
                    setGames(data.results);
                });
        }
    }, [api_urls.games, api_secrets.games, searched]);

    return (
        <div
            className={
                "container-fluid my-5 py-5 min-vh-100 " + classes["bg-info"]
            }
        >
            <div className="row mb-5">
                <div className="col-12 col-md-3 col-lg-2">
                    {genres && <GenresList data={genres} />}
                </div>
                <div className="col-12 col-md-9 col-lg-10">
                    <div className="row mb-4 justify-content-center">
                        <div className="col-12 col-md-6 col-lg-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control bg-transparent border-0 border border-bottom boder-danger rounded-0 text-white"
                                    placeholder="Search by name"
                                    onChange={(ev) =>
                                        setSearched(ev.target.value)
                                    }
                                    value={searched}
                                />
                                <button className="btn border-0" type="button">
                                    <i className="fa-sharp fa-solid fa-chevron-right fa-xl text-main"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {!searched && (
                        <div className="row justify-content-between mb-3">
                            <div className="col-2">
                                {num > 1 ? (
                                    <Link
                                        className="text-decoration-none text-white"
                                        to={`/search/${genre}/${+num - 1}`}
                                    >
                                        <i className="fa-sharp fa-solid fa-chevron-left fa-xl"></i>
                                    </Link>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="col-2 text-center">{num}</div>
                            <div className="col-2 text-end">
                                <Link
                                    className="text-decoration-none text-white"
                                    to={`/search/${genre}/${+num + 1}`}
                                >
                                    <i className="fa-sharp fa-solid fa-chevron-right fa-xl"></i>
                                </Link>
                            </div>
                        </div>
                    )}
                    <div className="row justify-content-center">
                        {games ? (
                            games.map((game) => (
                                <div
                                    className="col-12 col-md-6 col-lg-3 pb-3"
                                    key={game.id}
                                >
                                    <Card
                                        image={game.background_image}
                                        name={game.name}
                                        slug={game.slug}
                                        rating={game.rating}
                                    />
                                </div>
                            ))
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
