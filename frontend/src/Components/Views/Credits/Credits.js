import useToggle from "../../../Hooks/useToggle";

export default function Credits() {
    const [salta, setSalta] = useToggle();
    const [muovi, setMuovi] = useToggle();
    const [gira, setGira] = useToggle();
    const [batti, setBatti] = useToggle();

    return (
        <div className="row py-5 px-5 mx-0 mt-5">
            <div className="col-12 fs-5 py-3">
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item">
                        <span className="fw-light">Corso: </span>
                        <span className="fw-bold text-white">
                            Masterclass React JS 6^ edizione
                        </span>
                    </li>

                    <li className="list-group-item">
                        <span className="fw-light">Docente: </span>
                        <span className="fw-bold text-white">Simone Fiore</span>
                    </li>
                    <li className="list-group-item">
                        <span className="fw-light">Studente: </span>
                        <span className="fw-bold text-white">
                            Raffaele Ponturo
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="fw-light">Progetto: </span>
                        <span className="fw-bold text-white">ReHacktor</span>
                    </li>
                    <li className="list-group-item">
                        <span className="fw-light">Librerie: </span>
                        <span className="fw-bold text-white">
                            React, Bootstrap, React-Router-DOM, Google Fonts,
                            Fontawesome, Swiper
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="fw-light">API: </span>
                        <span className="fw-bold text-white">
                            The Biggest Video Game Database on RAWG (RAWG)
                        </span>
                    </li>
                </ul>
            </div>
            <div className="col-12 fs-5 py-3">
                <div className="pt-3">
                    <i
                        className={
                            "fa-solid fa-horse fa-2xl " +
                            (salta ? "fa-bounce" : "")
                        }
                        style={{
                            color: "#ff24e5",
                        }}
                    ></i>
                    <button className="btn btn-danger mx-3" onClick={setSalta}>
                        {salta ? "Fermati" : "Salta"}
                    </button>
                </div>
                <div className="pt-3">
                    <i
                        className={
                            "fa-solid fa-dragon fa-2xl " +
                            (muovi ? "fa-shake" : "")
                        }
                        style={{ color: "#2ed822" }}
                    ></i>
                    <button className="btn btn-danger mx-3" onClick={setMuovi}>
                        {muovi ? "Fermati" : "Muovi"}
                    </button>
                </div>
                <div className="pt-3">
                    <i
                        className={
                            "fa-solid fa-star fa-2xl " + (gira ? "fa-spin" : "")
                        }
                        style={{ color: "#f0ff24" }}
                    ></i>
                    <button className="btn btn-danger mx-3" onClick={setGira}>
                        {gira ? "Fermati" : "Gira"}
                    </button>
                </div>
                <div className="pt-3">
                    <i
                        className={
                            "fa-solid fa-heart fa-2xl " +
                            (batti ? "fa-beat" : "")
                        }
                        style={{ color: "#ff0000" }}
                    ></i>
                    <button className="btn btn-danger mx-3" onClick={setBatti}>
                        {batti ? "Fermati" : "Batti"}
                    </button>
                </div>
            </div>
        </div>
    );
}
