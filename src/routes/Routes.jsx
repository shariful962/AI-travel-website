import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Error from "../pages/Error";
import App from "../App";
import AuthLayout from "../layout/AuthLayout";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import ForgotPassword from "../components/auth/ForgotPassword";
import OtpVerify from "../components/auth/OtpVerify";
import ResetPassword from "../components/auth/ResetPassword";
import MainLayout from "../layout/MainLayout";
import Root from "../pages/Root";



export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <Error />,
        children: [
            {index: true, Component: App},
        ]
    },
    {
        Component: AuthLayout,
        children: [
            {path: 'signin', Component: Login},
            {path: 'signup', Component: Signup},
            {path: 'forgotpassword', Component: ForgotPassword},
            {path: 'otp', Component: OtpVerify},
            {path: 'resetpassword', Component: ResetPassword}
        ]
    },
    {
        path: '/home',
        Component: MainLayout,
        children: [
            {index: true, Component: Root},
            
        ]
        


    }
])