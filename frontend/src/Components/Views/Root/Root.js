import Navbar from "../../UI/Navbar/Navbar";
import Footer from "../../UI/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
