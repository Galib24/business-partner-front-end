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
import FranchiseDirectory from "../Pages/Franchise Directory/FranchiseDirectory";
import Faq from "../Pages/Faq Section/Faq";
import About from "../Pages/About Section/About";
import Pricing from "../Pages/Pricing Plans/Pricing";
import Terms from "../Pages/Terms/Terms";
import BusinessWanted from "../Pages/Business Wanted/BusinessWanted";
import Privacy from "../Pages/Privacy Policy/Privacy";

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
            },
            {
                path: 'franchise',
                element: <FranchiseDirectory></FranchiseDirectory>
            },
            {
                path: 'faq',
                element: <Faq></Faq>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'price',
                element: <Pricing></Pricing>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            },
            {
                path: 'businessWanted',
                element: <BusinessWanted></BusinessWanted>
            },
            {
                path: 'privacy',
                element: <Privacy></Privacy>
            }
        ]
    },
]);