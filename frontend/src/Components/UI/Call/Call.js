import { Link } from "react-router-dom";
import Video from "./../../../Assets/mars-explore.mp4";
import classes from "./Call.module.css";

export default function Call() {
    return (
        <div className="my-5">
            <header className={classes.header}>
                <div className={classes.overlay}></div>
                <video
                    playsInline="playsinline"
                    autoPlay="autoplay"
                    muted="muted"
                    loop
                >
                    <source src={Video} type="video/mp4" />
                </video>
                <div className="wrapper h-100">
                    <div className="row h-100 justify-content-center align-items-end pb-5">
                        <div className={"col-12 text-center " + classes.links}>
                            <Link
                                to="/games"
                                className={
                                    "btn btn-dark btn-lg rounded-0 " +
                                    classes["button-explore"]
                                }
                            >
                                Explore now
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
