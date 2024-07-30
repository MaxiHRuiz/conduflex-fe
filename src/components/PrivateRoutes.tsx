import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";

const PrivateRoute = () => {
    const { userSession } = useAuth()
    if (!userSession) return <Navigate to="/login" />;
    return <Outlet />;
};

export default PrivateRoute;