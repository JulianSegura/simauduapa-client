import { Navigate } from "react-router-dom";

// dashboard
import Dashboard from "pages/Dashboard";

// Authentication
import Login from "pages/Authentication/Login";
import Logout from "pages/Authentication/Logout";
import Register from "pages/Authentication/Register";
import ForgotPassword from "pages/Authentication/ForgotPassword";

//System Admin
import UsersList from "pages/Admin/Users/UsersList";
import UserProfile from "pages/Admin/Users/user-profile";

const authProtectedRoutes = [
    // Dashboard
    { path: "/dashboard", component: <Dashboard /> },
    { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
    { path: "*", component: <Navigate to="/dashboard" /> },
    { path: "/", exact: true, name: "Navigate", component: <Navigate to="/dashboard" /> },

    //users
    { path: "/users", name: "UsersList", component: <UsersList /> },
    { path: "/user-profile", name: "UserProfile", component: <UserProfile /> },
    // { path: "/register", name: "Register", component: <Register /> },
    // this route should be at the end of all other routes
    // eslint-disable-next-line react/display-name
];

const publicRoutes = [
    // Authentication
    { path: "/login", name: "Login", component: <Login /> },
    { path: "/logout", name: "Logout", component: <Logout /> },
    { path: "/forgot-password", name: "ForgotPassword", component: <ForgotPassword /> }
];

export { authProtectedRoutes, publicRoutes };