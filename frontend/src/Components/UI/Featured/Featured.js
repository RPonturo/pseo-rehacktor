import { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Featured() {
    const [featured, setFeatured] = useState(null);

    useEffect(() => {
        fetch(
            "https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&ordering=-rating&key=b89bcc2793194ab7a4e75876c96e1fe3"
        )
            .then((response) => response.json())
            .then((data) => {
                setFeatured(data.results.slice(0, 4));
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {featured &&
                    featured.map((el) => {
                        return (
                            <div
                                className="col-12 col-md-6 col-lg-3"
                                key={el.id}
                            >
                                <Card
                                    image={el.background_image}
                                    name={el.name}
                                    slug={el.slug}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
