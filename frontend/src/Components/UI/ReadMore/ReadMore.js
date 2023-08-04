import useToggle from "../../../Hooks/useToggle";
import classes from "./ReadMore.module.css";

export default function ReadMore({ text }) {
    const [isReadMore, setIsReadMore] = useToggle(true);

    return (
        <p className={classes.text}>
            {isReadMore ? text.slice(0, 800) : text}
            <span
                onClick={setIsReadMore}
                className={"ms-1 " + classes["read-or-hide"]}
            >
                {isReadMore ? "... read more" : " show less"}
            </span>
        </p>
    );
}
