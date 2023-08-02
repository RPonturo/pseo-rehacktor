import Navbar from "../../UI/Navbar/Navbar";
import Footer from "../../UI/Footer/Footer";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../../Contexts/Auth";
import { ConfigProvider } from "../../../Contexts/Config";

export default function Root() {
    return (
        <>
            <ConfigProvider>
                <AuthProvider>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </AuthProvider>
            </ConfigProvider>
        </>
    );
}
