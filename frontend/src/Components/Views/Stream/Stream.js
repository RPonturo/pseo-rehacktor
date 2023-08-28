import { useParams } from "react-router-dom";
import { startStreaming } from "../../../utilities/twilio";
import { AuthContext } from "../../../Contexts/Auth";
import { ConfigContext } from "../../../Contexts/Config";
import { StreamingContext } from "../../../Contexts/Streaming";
import { useContext, useRef } from "react";
import useInput from "../../../Hooks/useInput";
import classes from "./Stream.module.css";

export default function Stream() {
    const myFaceVideo = useRef(null);

    const { game_name, game_id } = useParams();

    const { user } = useContext(AuthContext);
    const { api_urls } = useContext(ConfigContext);
    const { isStreaming, setStreamingOn, setStreamingOff } =
        useContext(StreamingContext);

    const number = useInput(1);
    const token = JSON.parse(localStorage.getItem("user")).token;

    function startStream(ev) {
        ev.preventDefault();

        let object = {
            game_name: game_name,
            game_id: game_id,
            max_seats_available: number.value,
        };

        // creo stanza e ottengo jwt
        fetch(`${api_urls.backend}/api/users/room/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(object),
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("game", JSON.stringify(object));

                // attivare lo streaming
                startStreaming(
                    data.twillio.jwt,
                    data.twillio.room_name,
                    myFaceVideo
                )
                    .then(() => {
                        console.log("streaming lanciato");
                        setStreamingOn();
                    })
                    .catch((e) => {
                        console.log("errore, ", e);

                        // endStream();
                    });
            });
    }

    function endStream() {
        fetch(`${api_urls.backend}/api/users/room/close`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Ops....");
                }
                return res.json();
            })
            .then((data) => {
                console.log("Ending, ", data);
                localStorage.removeItem("game");
                setStreamingOff();
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    }

    return (
        <div className="container mt-5 pt-5 min-vh-100">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-capitalize">Hello, {user.username}</h3>
                    {isStreaming ? (
                        <div>
                            <p>
                                You are streaming{" "}
                                {game_name.replace(/-/g, " ").toUpperCase()}{" "}
                                <i className="fa-fw fa-sharp fa-regular fa-screencast ms-1 text-danger fa-fade"></i>
                            </p>{" "}
                            <button
                                className="btn btn-danger mt-1 mb-3 rounded-0 px-3"
                                onClick={endStream}
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <div>
                            <p>
                                You are going to stream{" "}
                                {game_name.replace(/-/g, " ").toUpperCase()}
                            </p>

                            <p>
                                <a
                                    href={`https://www.youtube.com/results?search_query=gameplay+${game_name}`}
                                    target="_blank"
                                    className="text-decoration-none text-white"
                                >
                                    Search for a gameplay
                                </a>
                            </p>

                            <p>Select a number of seats: {number.value}</p>

                            <form className="w-50" onSubmit={startStream}>
                                <input
                                    type="range"
                                    className="form-range danger range-cust"
                                    min="1"
                                    max="10"
                                    id="range"
                                    value={number.value}
                                    {...number}
                                />
                                <button className="btn btn-outline-danger rounded-0 px-3 text-white mt-5">
                                    Stream now!
                                </button>
                            </form>
                        </div>
                    )}
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <div
                        ref={myFaceVideo}
                        className={`w-100 ${classes.faceVideo}`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
