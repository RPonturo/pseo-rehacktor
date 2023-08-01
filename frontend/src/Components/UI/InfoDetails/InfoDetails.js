import CountUpNumber from "../CountUpNumber/CountUpNumber";

export default function InfoDetails({ number, icon, cssClass, label }) {
    return (
        <div className={"col-6 col-md-4 my-5 text-center " + cssClass}>
            <i className={"fa-solid fa-2x text-main " + icon}></i>
            <CountUpNumber number={number} />
            <p>{label}</p>
        </div>
    );
}

// default props senza passare la props al componente
InfoDetails.defaultProps = {
    number: 1,
    icon: "fa-user",
    cssClass: "",
    label: "pippo",
};
