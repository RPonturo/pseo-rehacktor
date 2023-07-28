import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./Components/Views/Home/Home";
import Root from "./Components/Views/Root/Root";
import Error from "./Components/Views/Error/Error";
import Game from "./Components/Views/Game/Game";
import Search from "./Components/Views/Search/Search";
import Credits from "./Components/Views/Credits/Credits";

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
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
