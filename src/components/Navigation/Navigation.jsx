import { Link } from "react-router-dom";
import { AiOutlineContacts } from 'react-icons/ai';
//Components
import AuthMenu from "./AuthMenu/AuthMenu";
import UserMenu from "./UserMenu/UserMenu";
//Hooks
import { useAuth } from "shared/hooks/useAuth";

export default function Navigation() {

    const isLogin = useAuth();

    return (
        <nav style={{display: "flex", justifyContent: "space-between"}}>
            <Link to="/"> <AiOutlineContacts size="50" color="rgb(82, 132, 170)" /> </Link>
            {isLogin && <Link to="/contacts">Contacts</Link>} 
            {isLogin ? <UserMenu /> : <AuthMenu />}            
        </nav>
    )
}
