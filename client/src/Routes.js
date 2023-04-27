import AdminPage from "./pages/AdminPage";
import About from "./pages/About";
import QuestionPage from "./pages/QuestionPage";
import UserPage from "./pages/UserPage";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    CONTACTS_ROUTE,
    LOGIN_ROUTE,
    QUESTION_ROUTE,
    REGISTRATION_ROUTE,
    USER_ROUTE,
} from "./utils/constants";
import Contacts from "./pages/Contacts";
import Auth from "./pages/Auth";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <AdminPage/>,
    },
    {
        path: USER_ROUTE + "/:id",
        Component: <UserPage/>,
    },
    {
        path: QUESTION_ROUTE,
        Component: <QuestionPage/>,
    },
];
export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: <About/>,
    },
    {
        path: CONTACTS_ROUTE,
        Component: <Contacts/>,
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>,
    },
];
