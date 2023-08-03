import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./Components/Views/Home/Home";
import Root from "./Components/Views/Root/Root";
import Error from "./Components/Views/Error/Error";
import Game from "./Components/Views/Game/Game";
import Search from "./Components/Views/Search/Search";
import Credits from "./Components/Views/Credits/Credits";
import Profile from "./Components/Views/Profile/Profile";
import ProtectedRoute from "./Components/Utilities/ProtectedRoute";
import Sign from "./Components/Views/Sign/Sign";
import Genres from "./Components/Views/Genres/Genres";
import Games from "./Components/Views/Games/Games";

function App() {
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
                    path: "/credits",
                    element: <Credits />,
                },
                {
                    path: "/game/:slug",
                    element: <Game />,
                },
                {
                    path: "/search",
                    element: <Search />,
                },
                {
                    path: "/genres/:genre?/:num?",
                    element: <Genres />,
                },
                {
                    path: "/games",
                    element: <Games />,
                },
                {
                    path: "/sign",
                    element: <Sign />,
                },
                {
                    path: "/profile",
                    element: (
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    ),
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
