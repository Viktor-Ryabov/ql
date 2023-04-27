import React from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../Routes";
import About from "../pages/About";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    CONTACTS_ROUTE,
    LOGIN_ROUTE,
    QUESTION_ROUTE,
    REGISTRATION_ROUTE,
    USER_ROUTE,
} from "../utils/constants";
import AdminPage from "../pages/AdminPage";
import UserPage from "../pages/UserPage";
import QuestionPage from "../pages/QuestionPage";
import Contacts from "../pages/Contacts";
import Auth from "../pages/Auth";

const AppRouter = () => {
    const isAuth = true;
    if (isAuth) {
        return (
            <Routes>
                <Route exact path={ADMIN_ROUTE} element={<AdminPage />} />
                <Route exact path={USER_ROUTE + "/:id"} element={<UserPage />} />
                <Route exact path={QUESTION_ROUTE} element={<AdminPage />} />
                <Route exact path={ADMIN_ROUTE} element={<QuestionPage />} />
                <Route exact path={ABOUT_ROUTE} element={<About />} />
                <Route exact path={CONTACTS_ROUTE} element={<Contacts />} />
                <Route exact path={LOGIN_ROUTE} element={<Auth />} />
                <Route exact path={REGISTRATION_ROUTE} element={<Auth />} />
                <Route exact path="*" element={<Auth />}/>
            </Routes>
        );
    } else {
        return (
            <Routes>
                <Route exact path={ABOUT_ROUTE} element={<About />} />
                <Route exact path={CONTACTS_ROUTE} element={<Contacts />} />
                <Route exact path={LOGIN_ROUTE} element={<Auth />} />
                <Route exact path={REGISTRATION_ROUTE} element={<Auth />} />
                <Route exact path="*" element={<Auth />}/>
            </Routes>
        );
    }
};

export default AppRouter;
