import { useContext, useEffect, useState } from "react";
import { ConfigContext } from "../../../Contexts/Config";
import Card from "../../UI/Card/Card";
import Loader from "../../UI/Loader/Loader";
import useDebounce from "../../../Hooks/useDebounce";

export default function Search() {
    let { api_urls, api_secrets } = useContext(ConfigContext);
    const [searched, setSearched] = useState("");
    const [games, setGames] = useState(null);
    const debouncedSearched = useDebounce(searched, 2000);

    useEffect(() => {
        if (debouncedSearched) {
            fetch(
                `${api_urls.games}/api/games?key=${api_secrets.games}&page_size=24&search=${debouncedSearched}&search_precise=true`
            )
                .then((response) => response.json())
                .then((data) => {
                    setGames(data.results);
                });
        } else {
            setGames(null);
        }
    }, [api_urls.games, api_secrets.games, debouncedSearched]);

    return (
        <div className={"container-fluid my-5 pt-5 min-vh-100 bg-info"}>
            <div className="row mb-4 justify-content-center">
                <div className="col-12 col-md-6 col-lg-5">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control bg-transparent border-0 border border-bottom boder-danger rounded-0 text-white"
                            placeholder="Search by name"
                            onChange={(ev) => setSearched(ev.target.value)}
                            value={searched}
                        />
                        <button className="btn border-0" type="button">
                            <i className="fa-sharp fa-solid fa-chevron-right fa-xl text-main"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5 px-3">
                {games ? (
                    games.length > 0 ? (
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
                        <div className="col-12 text-center">
                            <h4>Ops... No results found!</h4>
                        </div>
                    )
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
}
