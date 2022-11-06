import { useDispatch, useSelector } from "react-redux";
import { ImUser } from 'react-icons/im';
//Redux
import { logout } from "redux/auth/auth-operation";
import { getUser } from "redux/auth/auth-selectors";

export default function UserMenu() {

    const user = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <div style={{display: "flex"}}>
            <p> <ImUser color="rgb(82, 132, 170)" /> {user.email} </p>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}
