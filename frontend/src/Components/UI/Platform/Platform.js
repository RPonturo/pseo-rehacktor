import { useEffect, useState } from "react";

export default function Platform(props) {
    const [platform, setPlatform] = useState(null);
    useEffect(() => {
        fetch(
            `https://api.rawg.io/api/platforms/${props.id}?key=b89bcc2793194ab7a4e75876c96e1fe3`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPlatform(data);
            });
    }, [props.id]);
    return platform && <div>{platform.name}</div>;
}
