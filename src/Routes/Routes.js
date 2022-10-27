import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Courses from "../components/Courses/Courses";
import Faq from "../components/Faq/Faq";
import Main from "../layouts/Main";
import Course from "../components/Courses/Course/Course";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../components/PrivateRoutes/PrivateRoute";
import Profile from "../components/Profile/Profile";
import CheckOut from "../components/CheckOut/CheckOut";
import Error from "../components/NotFountError/Error";

export const routes = createBrowserRouter([
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
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://north-tech-server.vercel.app/courses/${params.id}`),
                element: <Course></Course>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://north-tech-server.vercel.app/courses/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            { path: '*', element: <Error></Error> }
        ]
    }

])