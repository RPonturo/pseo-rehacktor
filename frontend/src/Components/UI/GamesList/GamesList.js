import { useContext, useEffect, useState } from "react";
import { ConfigContext } from "../../../Contexts/Config";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { register } from "swiper/element/bundle";
import { Navigation, Scrollbar } from "swiper/modules";

export default function GamesList({ dates }) {
    const [games, setGames] = useState();
    let { api_urls, api_secrets } = useContext(ConfigContext);

    useEffect(() => {
        register();
        fetch(
            `${api_urls.games}/api/games?&page_size=20&exclude_parents=true&exclude_additions=true&ordering=-rating&key=${api_secrets.games}${dates}`
        )
            .then((response) => response.json())
            .then((data) => {
                setGames(data.results);
            });
    }, [api_urls.games, api_secrets.games, dates]);

    return (
        <Swiper
            breakpoints={{
                // Mobile devices
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                // iPads, Tablets
                481: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                // Small screens, laptops
                769: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                // Desktops, large screens
                1025: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                // Extra large screens, TV
                1201: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
                // 2K e 4K
                2560: {
                    slidesPerView: 10,
                    spaceBetween: 30,
                },
            }}
            navigation={true}
            scrollbar={{
                hide: true,
            }}
            modules={[Scrollbar, Navigation]}
        >
            {games &&
                games.map((el) => {
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
                })}
        </Swiper>
    );
}
