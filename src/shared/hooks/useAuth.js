import { useSelector } from "react-redux";
import { isLogin } from "redux/auth/auth-selectors";

export const useAuth = () => {
    return useSelector(isLogin)
}
