import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Courses from "../components/Courses/Courses";
import Faq from "../components/Faq/Faq";
import Main from "../layouts/Main";

export const routes= createBrowserRouter([
    {
        path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'courses',
            element: <Courses></Courses>
        },
        {
            path: 'faq',
            element: <Faq></Faq>
        },
        {
            path: 'blog',
            element: <Blog></Blog>
        }
    ]
    }

])