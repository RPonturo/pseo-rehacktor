import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const userLogged = true;

    return userLogged ? children : <Navigate to="/" />;
}
