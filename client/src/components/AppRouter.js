import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
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
import { Context } from "../index";

const AppRouter = () => {
    // const isAuth = true;
    const {user} = useContext(Context);
    console.log(user)
    if (user.isAuth) {
        return (
            <Routes>
                <Route exact path={ADMIN_ROUTE} element={<AdminPage />} />
                <Route exact path={USER_ROUTE + "/:id"} element={<UserPage />} />
                <Route exact path={QUESTION_ROUTE} element={<QuestionPage />} />
                <Route exact path={ABOUT_ROUTE} element={<About />} />
                <Route exact path={CONTACTS_ROUTE} element={<Contacts />} />
                <Route exact path={LOGIN_ROUTE} element={<Auth />} />
                <Route exact path={REGISTRATION_ROUTE} element={<Auth />} />
                <Route exact path="*" element={<About />}/>
            </Routes>
        );
    } else {
        return (
            <Routes>
                <Route exact path={ABOUT_ROUTE} element={<About />} />
                <Route exact path={CONTACTS_ROUTE} element={<Contacts />} />
                <Route exact path={LOGIN_ROUTE} element={<Auth />} />
                <Route exact path={REGISTRATION_ROUTE} element={<Auth />} />
                <Route exact path="*" element={<About />}/>
            </Routes>
        );
    }
};

export default AppRouter;
