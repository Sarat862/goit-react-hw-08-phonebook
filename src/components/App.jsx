import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//Components
import Navigation from "./Navigation/Navigation";
import PublicRoute from "./PublicRoute/PublicRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
//Redux
import { current } from "redux/auth/auth-operation";
import { getLoadingUserStatus } from "redux/auth/auth-selectors";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// MaterialUI
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// Pages
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

export const App = () => {

    const isLoadingUser = useSelector(getLoadingUserStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(current());
    }, [dispatch])

    return (
        <>
            {isLoadingUser ? <CircularProgress/> : (
                <>
                    <Navigation/>
                    <Suspense fallback={
                        <Box sx={{ display: 'flex', justifyContent: "center", mt: 20 }}>
                            <CircularProgress size="100px"/>
                        </Box>
                    }>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route element={<PublicRoute />}>   
                                <Route path="/register" element={<RegisterPage />} />
                                <Route path="/login" element={<LoginPage />} />
                            </Route>
                            <Route element={<PrivateRoute />}>
                                <Route path="/contacts" element={<ContactsPage />} />
                            </Route>
                        </Routes>
                    </Suspense>
                    <ToastContainer position="top-center" hideProgressBar autoClose={3000} theme="colored"/>
                </>
            )} 
        </>
    );
}