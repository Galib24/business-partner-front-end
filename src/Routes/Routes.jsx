import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/login/Login";
import Blog from "../Pages/Home/Blog Section/Blog";
import BusinessList from "../Pages/Home/Business List/BusinessList";
import Gallery from "../Pages/Home/Gallery/Gallery";
import Bonus from "../Pages/Home/Bonus/Bonus";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'blogs',
                element: <Blog></Blog>
            },
        
            {
                path: 'businessList',
                element: <BusinessList></BusinessList>
            },
            {
                path: 'gallery',
                element: <Gallery></Gallery>
            },
            {
                path: 'contactPost',
                element: <Bonus></Bonus>
            }
        ]
    },
]);