import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
// Pages
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

export const App = () => {

    return (
        <>
            <Navigation/>
            <Suspense fallback={<p>...Load page</p>}>
                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                </Routes>
            </Suspense>
        </>
    );
}