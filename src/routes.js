import {AUTH_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PHOTO_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE} from "./consts";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import {Navigate} from "react-router-dom";
import PhotoDetail from "./pages/PhotoDetail";
import Profile from "./pages/Profile"


export const publicRoutes = [
    { path: AUTH_ROUTE, element: <Auth/>, exact: true },
    { path: MAIN_ROUTE, element: <Main/>, exact: true },
    { path: PHOTO_ROUTE + ":id", element: <PhotoDetail/>, exact: true },
    { path: PROFILE_ROUTE, element: <Profile/>, exact: true },
    {path: "*", element: <Navigate to={"/"}/>, exact: true}
]

export const authRoutes = []