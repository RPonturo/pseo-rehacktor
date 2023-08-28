import InfoDetails from "./InfoDetails";

export default function InfoDetailsList({ show }) {
    const home = [
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

    const profile = [
        {
            number: "35",
            label: "Games",
            icon: "fa-alien-8bit",
            cssClass: "text-md-start",
        },
        {
            number: "134",
            label: "Friends",
            icon: "fa-people-group",
            cssClass: "",
        },
        {
            number: "251",
            label: "Archivments",
            icon: "fa-medal",
            cssClass: "text-md-end",
        },
        {
            number: "13",
            label: "Tournaments",
            icon: "fa-trophy",
            cssClass: "text-md-start",
        },
        {
            number: "17363",
            label: "Hours played",
            icon: "fa-clock",
            cssClass: "",
        },
        {
            number: "4935",
            label: "Hours stremed",
            icon: "fa-signal-stream",
            cssClass: "text-md-end",
        },
    ];

    return (
        <div className="row px-md-5">
            {show == "home"
                ? home.map((info, i) => (
                      <InfoDetails
                          key={i}
                          number={info.number}
                          label={info.label}
                          icon={info.icon}
                          cssClass={info.cssClass}
                      />
                  ))
                : profile.map((info, i) => (
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
