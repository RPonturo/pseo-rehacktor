import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./Components/Views/Home/Home";
import Root from "./Components/Views/Root/Root";
import Error from "./Components/Views/Error/Error";
import Navbar from "./Components/UI/Navbar/Navbar";
import Footer from "./Components/UI/Footer/Footer";
import Info from "./Components/UI/Info/Info";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/info",
                element: <Info />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>
    );
}

export default App;
