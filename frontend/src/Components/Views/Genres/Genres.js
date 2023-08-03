import { useContext, useEffect, useState } from "react";
import GenresList from "../../UI/GenresList/GenresList";
import { ConfigContext } from "../../../Contexts/Config";
import { Link, useParams } from "react-router-dom";
import Card from "../../UI/Card/Card";
import Loader from "../../UI/Loader/Loader";

export default function Genres() {
    let { api_urls, api_secrets } = useContext(ConfigContext);
    let { genre, num } = useParams();
    if (!num) num = 1;
    const [genres, setGenres] = useState(null);
    const [games, setGames] = useState(null);

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

    return (
        <div className="container-fluid mt-5 pt-5 bg-info min-vh-100">
            <div className="row mb-5">
                <div className="col-12 col-md-3 col-lg-2">
                    {genres && <GenresList data={genres} />}
                </div>
                {genre ? (
                    <div className="col-12 col-md-9 col-lg-10 pe-4">
                        <div className="row justify-content-between mb-3">
                            <div className="col-2">
                                {num > 1 ? (
                                    <Link
                                        className="text-decoration-none text-white"
                                        to={`/genres/${genre}/${+num - 1}`}
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
                                    to={`/genres/${genre}/${+num + 1}`}
                                >
                                    <i className="fa-sharp fa-solid fa-chevron-right fa-xl"></i>
                                </Link>
                            </div>
                        </div>
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
                ) : (
                    <div className="col-12 col-md-9 col-lg-10 mt-5 pe-4">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                Choose the genre <Loader />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
