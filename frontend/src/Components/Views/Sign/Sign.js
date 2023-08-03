import { useState } from "react";
import classes from "./Sign.module.css";
import SignUp from "../../UI/SignUp/SignUp";
import SignIn from "../../UI/SignIn/SignIn";

export default function Sign() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={"container-fluid min-vh-100 " + classes.bg}>
            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-12 col-md-8 col-lg-6">
                        {isLogin ? <SignIn /> : <SignUp />}
                        <button
                            className="mt-5 small btn btn-outline-danger rounded-0 text-white"
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin
                                ? "Not a user? Register now!"
                                : "Alredy a user? Login now!"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
