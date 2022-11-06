import { Navigate, Outlet } from "react-router-dom";
//Redux
import { useAuth } from "shared/hooks/useAuth";

export default function PrivateRoute() {

    const isLogin = useAuth();

    if (!isLogin) {
        return <Navigate to="/login" />;
    }
    return <Outlet />
}
