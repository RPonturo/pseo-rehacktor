import { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth";

export default function Profile() {
    const { user } = useContext(AuthContext);

    return (
        <div className="container mt-5 pt-5 min-vh-100">
            <div className="container">
                <div className="col-12">
                    <h3>Bentornato, {user.username}</h3>
                </div>
                <div className="col-12"> staistiche utente</div>
            </div>
        </div>
    );
}
