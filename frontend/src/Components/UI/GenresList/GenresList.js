import classes from "./GenresList.module.css";

export default function GenresList(props) {
    return (
        <div className={classes["genres-wrapper"]}>
            {props.data.map((genre) => (
                <button
                    className="btn btn-outline-danger rounded-0 d-block w-100 text-start mb-2"
                    key={genre.id}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    );
}
