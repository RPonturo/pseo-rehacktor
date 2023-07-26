import classes from "./Footer.module.css";

export default function Footer() {
    return (
        <div
            className={
                "container-fluid pb-2 position-relative " +
                classes.borderGradTop
            }
        >
            <div className={"position-absolute " + classes.footerBox}></div>
            <div className="row py-3 px-md-4 justify-content-between align-items-center">
                <div className="col-12">
                    <div className="font-exan text-main">ReHacktor</div>
                </div>
            </div>
            <div className="row px-md-5">
                <div className="col-12 col-md-4 py-2 py-md-4 ">
                    <p className="small mb-0">
                        Explore a vast catalog of video games, register and let
                        your friends watch your games.
                    </p>
                </div>
                <div className="col-12 col-md-4 py-2 py-md-4 ">
                    <p className="small mb-0">
                        Made for HackJS by Aulab - 2023
                    </p>
                </div>
                <div className="col-12 col-md-4 py-2 py-md-4 small">
                    <a
                        href="https://aulab.it"
                        className="text-decoration-none text-white me-3"
                    >
                        <i className="fal fa-link me-2"></i>
                        website
                    </a>
                    <a
                        href="https://aulab.it/instagram"
                        className="text-decoration-none text-white me-3"
                    >
                        <i className="fab fa-instagram me-2"></i>
                        instagram
                    </a>
                    <a
                        href="https://aulab.it/twitter"
                        className="text-decoration-none text-white me-3"
                    >
                        <i className="fab fa-twitter me-2"></i>
                        twitter
                    </a>
                    <a
                        href="https://aulab.it/facebook"
                        className="text-decoration-none text-white me-3"
                    >
                        <i className="fab fa-facebook me-2"></i>
                        facebook
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <p className="small text-secondary">
                        All data and images are provided by{" "}
                        <a
                            className="text-decoration-none text-secondary"
                            href="https://rawg.io/"
                        >
                            RAWG
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
