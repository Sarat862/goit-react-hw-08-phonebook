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
// Pages
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
            {isLoadingUser ? <p>Loading...</p> : (
                <>
                    <Navigation/>
                    <Suspense fallback={<p>...Load page</p>}>
                        <Routes>
                            <Route element={<PublicRoute />}>
                                <Route path="/register" element={<RegisterPage />} />
                                <Route path="/login" element={<LoginPage />} />
                            </Route>
                            <Route element={<PrivateRoute />}>
                                <Route path="/contacts" element={<ContactsPage />} />
                            </Route>
                        </Routes>
                    </Suspense>
                </>
            )} 
        </>
    );
}