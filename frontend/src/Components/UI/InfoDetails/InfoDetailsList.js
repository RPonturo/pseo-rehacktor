import InfoDetails from "./InfoDetails";

export default function InfoDetailsList() {
    const data = [
        {
            number: "583097",
            label: "Games",
            icon: "fa-gamepad-modern",
            cssClass: "text-md-start",
        },
        {
            number: "19",
            label: "Categories",
            icon: "fa-bars-staggered",
            cssClass: "",
        },
        {
            number: "51",
            label: "Platforms",
            icon: "fa-joystick",
            cssClass: "text-md-end",
        },
        {
            number: "48674",
            label: "Publishers",
            icon: "fa-users",
            cssClass: "text-md-start",
        },
        {
            number: "7363",
            label: "Tags",
            icon: "fa-tags",
            cssClass: "",
        },
        {
            number: "24935",
            label: "Creators",
            icon: "fa-handshake-angle",
            cssClass: "text-md-end",
        },
    ];

    return (
        <div className="row px-md-5">
            {data.map((info, i) => (
                <InfoDetails
                    key={i}
                    number={info.number}
                    label={info.label}
                    icon={info.icon}
                    cssClass={info.cssClass}
                />
            ))}
        </div>
    );
}
