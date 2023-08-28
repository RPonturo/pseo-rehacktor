import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ConfigContext } from "../../../Contexts/Config";
import Loader from "../../UI/Loader/Loader";
import ReadMore from "../../UI/ReadMore/ReadMore";
import { AuthContext } from "./../../../Contexts/Auth";

export default function Game() {
    let { api_urls, api_secrets } = useContext(ConfigContext);
    let { user } = useContext(AuthContext);
    let { slug } = useParams();
    const [game, setGame] = useState(null);
    useEffect(() => {
        fetch(`${api_urls.games}/api/games/${slug}?key=${api_secrets.games}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setGame(data);
            });
    }, [slug, api_urls.games, api_secrets.games]);
    return (
        <>
            {game ? (
                <div
                    className="container-fluid pt-5 min-vh-100"
                    style={{
                        background: `linear-gradient(rgba(33,33,33,1),rgba(33,33,33,0.8),rgba(33,33,33,1)),url(${game.background_image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-12">
                                <h1>{game.name}</h1>
                                <p className="small">
                                    Developed by {game.developers[0].name}
                                </p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 col-md-6">
                                <ReadMore text={game.description_raw} />
                            </div>
                            <div className="col-12 col-md-6">
                                <img
                                    className="img-fluid"
                                    src={game.background_image}
                                    alt={game.name}
                                />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <h3>Genres</h3>
                            <div>
                                {game.genres.map((el) => (
                                    <Link
                                        key={el.id}
                                        to={`/genres/${el.slug}/1`}
                                        className="text-decoration-none me-2"
                                    >
                                        <button className="btn btn-outline-danger px-5 rounded-0 text-white">
                                            {el.name}
                                        </button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="row mt-5">
                            <h3>Platforms</h3>
                            <div>
                                {game.platforms.map((el) => (
                                    <span className="me-3" key={el.platform.id}>
                                        {el.platform.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 col-md-3 col-lg-3 mb-5">
                                <p className="h4 text-main">Informations</p>
                                <div className="mb-3">
                                    <p className="small mb-0">WEBSITE</p>
                                    <p className="ms-3 mb-0">
                                        <i className="fal fa-level-up fa-rotate-90 text-main me-3"></i>
                                        <a
                                            className="text-decoration-none text-white"
                                            href={game.website}
                                        >
                                            Go to{" "}
                                            <i className="fal fa-chevron-right"></i>
                                        </a>
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <p className="small mb-0">RELEASED</p>
                                    <p className="ms-3 text-white mb-0">
                                        <i className="fal fa-level-up fa-rotate-90 text-main me-3"></i>
                                        {game.released}
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <p className="small mb-0">PLAYTIME</p>
                                    <p className="ms-3 text-white mb-0">
                                        <i className="fal fa-level-up fa-rotate-90 text-main me-3"></i>
                                        {game.playtime} h
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-3 mb-5">
                                <p className="h4 text-main">Ratings</p>
                                {game.ratings.map((el) => {
                                    return (
                                        <div key={el.id} className="mb-3">
                                            <p className="small mb-0">
                                                {el.title.toUpperCase()}
                                                <span className="float-end">
                                                    {el.percent}%
                                                </span>
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="col-12 col-md-5 col-lg-5 mb-5">
                                {user ? (
                                    <Link
                                        to={`/stream/${game.slug}/${game.id}`}
                                        className="h4 text-main text-decoration-none fst-italic"
                                    >
                                        <i className="fal fa-chevron-right me-1" />
                                        Start Your Stream!
                                        <i className="fa-sharp fa-regular fa-signal-stream fa-fade ms-2"></i>
                                    </Link>
                                ) : (
                                    <p className="h4 text-main text-decoration-none">
                                        <i className="fa-sharp fa-regular fa-signal-stream-slash me-1"></i>
                                        You must be logged to stream.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container-fluid pt-5 mt-5 min-vh-100">
                    <div className="row justify-content-center">
                        <Loader />
                    </div>
                </div>
            )}
        </>
    );
}
