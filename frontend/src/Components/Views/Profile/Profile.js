import { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth";
import InfoDetailsList from "../../UI/InfoDetails/InfoDetailsList";

export default function Profile() {
    const { user } = useContext(AuthContext);

    return (
        <>
            <div className="container mt-5 pt-5">
                <div className="col-12">
                    <h3 className="text-capitalize">
                        Welcome, {user.username}
                    </h3>
                </div>
                <InfoDetailsList show="profile" />
            </div>
        </>
    );
}
