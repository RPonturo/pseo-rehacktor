import { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth";
import useInput from "../../../Hooks/useInput";
import { ConfigContext } from "../../../Contexts/Config";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const navigate = useNavigate();
    let { login } = useContext(AuthContext);
    let { api_urls } = useContext(ConfigContext);

    const email = useInput("");
    const password = useInput("");

    const signIn = (event) => {
        event.preventDefault();
        fetch(`${api_urls.backend}/api/users/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                const token = data.token;
                fetch(`${api_urls.backend}/api/users/view-profile`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        login(data.data.name, token, data.data.id);
                        navigate("/profile");
                    });
            });
        //login("Pippo", "iughdiwd", 123);
    };
    return (
        <>
            <form className="sign-form" onSubmit={signIn}>
                <div className="sign-top"></div>
                <div className="sign-bottom"></div>
                <div className="mb-5">
                    <label className="form-label" htmlFor="userMail">
                        Inserisci la tua mail
                    </label>
                    <input
                        type="email"
                        className="form-control bg-transparent rounded-0 border-0 border-bottom border-danger text-white"
                        id="userMail"
                        {...email}
                    />
                </div>
                <div className="mb-5">
                    <label className="form-label" htmlFor="userPassword">
                        Inserisci la tua password
                    </label>
                    <input
                        type="password"
                        className="form-control bg-transparent rounded-0 border-0 border-bottom border-danger text-white"
                        id="userPassword"
                        {...password}
                    />
                </div>
                <div className="mb-3">
                    <button
                        type="submit"
                        className="btn btn-outline-danger px-5 rounded-0 text-white"
                    >
                        Login
                    </button>
                </div>
            </form>
        </>
    );
}
