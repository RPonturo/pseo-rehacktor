import { Link } from "react-router-dom";
import classes from "./Card.module.css";

export default function Card(props) {
    return (
        <div className={classes["card-game"]}>
            <img src={props.image} alt={props.name} />
            <p className="text-truncate">{props.name}</p>
            <Link to={`/game/${props.slug}`}>
                <i className="fa-solid fa-play text-danger"></i>
            </Link>
            <div></div>
            <div></div>
        </div>
    );
}
