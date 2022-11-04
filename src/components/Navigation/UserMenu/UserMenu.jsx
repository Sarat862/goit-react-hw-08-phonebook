import { useDispatch } from "react-redux";
import { logout } from "redux/auth/auth-operation";

export default function UserMenu() {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  }

    return (
        <div style={{display: "flex"}}>
            <p>mango@mail.com</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}
