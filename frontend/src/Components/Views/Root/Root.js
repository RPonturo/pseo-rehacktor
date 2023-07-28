import Navbar from "../../UI/Navbar/Navbar";
import Footer from "../../UI/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ConfigProvider } from "../../../Contexts/Config";

export default function Root() {
    return (
        <>
            <ConfigProvider>
                <Navbar />
                <Outlet />
                <Footer />
            </ConfigProvider>
        </>
    );
}
