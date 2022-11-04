import { Link } from "react-router-dom";
import AuthMenu from "./AuthMenu/AuthMenu";
import UserMenu from "./UserMenu/UserMenu";
import { useAuth } from "shared/hooks/useAuth";

export default function Navigation() {

    const isLogin = useAuth();

    return (
        <nav style={{display: "flex", justifyContent: "space-between"}}>
            <Link to="/">Logo</Link>
            {isLogin && <Link to="/contacts">Contacts</Link>} 
            {isLogin ? <UserMenu /> : <AuthMenu />}            
        </nav>
    )
}
