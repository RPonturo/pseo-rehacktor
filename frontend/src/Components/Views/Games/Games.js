import GamesList from "../../UI/GamesList/GamesList";

export default function Games() {
    const now = Date.now();
    const today = new Date(now);
    const todayFormatted = today.toISOString().split("T")[0];

    const previous = new Date(now - 30 * 24 * 60 * 60 * 1000);
    const previousFormatted = previous.toISOString().split("T")[0];

    return (
        <div className={"container-fluid my-5 pt-5 min-vh-100 bg-info"}>
            <div className="row pt-4">
                <div className="col-12 px-5">
                    <h3>Best of the year</h3>
                </div>
                <div className="col-12 px-3">
                    <GamesList dates={`&dates=2023-01-01,${todayFormatted}`} />
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-12 px-5">
                    <h3>Popular in 2022</h3>
                </div>
                <div className="col-12 px-3">
                    <GamesList dates="&dates=2022-01-01,2022-12-31" />
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-12 px-5">
                    <h3>All time top</h3>
                </div>
                <div className="col-12 px-3">
                    <GamesList dates="" />
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-12 px-5">
                    <h3>Last 30 days</h3>
                </div>
                <div className="col-12 px-3">
                    <GamesList
                        dates={`&dates=${previousFormatted},${todayFormatted}`}
                    />
                </div>
            </div>
        </div>
    );
}
