import Video from "./../../../Assets/mars.mp4";
import classes from "./Header.module.css";
export default function Header() {
    return (
        <header className="mb-5 pt-5">
            <div className={classes.overlay}></div>

            <video playsInline autoPlay muted loop className="pt-5">
                <source src={Video} type="video/mp4" />
            </video>

            <div className={classes.container + " h100"}>
                <div className="row h-100 justify-content-center align-items-center pt-5 mt-3">
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <h1 className="display-1 font-orbitron text-main text-danger">
                            ReHacktor
                        </h1>
                        <p className="lead mb-0">
                            Explore Rehacktor, the only site that allows you to
                            discover new games and share experience with your
                            friends!
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
