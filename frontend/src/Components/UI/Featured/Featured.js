import { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import { ConfigContext } from "../../../Contexts/Config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Featured() {
    const [featured, setFeatured] = useState(null);

    let { api_urls, api_secrets } = useContext(ConfigContext);

    useEffect(() => {
        const now = Date.now();
        const today = new Date(now);
        const todayFormatted = today.toISOString().split("T")[0];

        const previous = new Date(now - 30 * 24 * 60 * 60 * 1000);
        const previousFormatted = previous.toISOString().split("T")[0];
        fetch(
            `${api_urls.games}/api/games?dates=${previousFormatted},${todayFormatted}&ordering=-rating&key=${api_secrets.games}`
        )
            .then((response) => response.json())
            .then((data) => {
                setFeatured(data.results);
            });
    }, [api_urls.games, api_secrets.games]);

    return (
        <div className="container">
            <div className="row">
                <Swiper spaceBetween={50} slidesPerView={4}>
                    {featured &&
                        featured.map((el) => {
                            return (
                                <SwiperSlide
                                    className="col-12 col-md-6 col-lg-3 pb-3"
                                    key={el.id}
                                >
                                    <Card
                                        image={el.background_image}
                                        name={el.name}
                                        slug={el.slug}
                                        rating={el.rating}
                                    />
                                </SwiperSlide>
                            );
                        })}{" "}
                </Swiper>
            </div>
        </div>
    );
}

/*
import {useLoaderData} from "react-router-dom"
export async function loadGames(){
    return await fetch()
}
*/
