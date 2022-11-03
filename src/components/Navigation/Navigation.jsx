import { Link } from "react-router-dom";
import NavAuth from "./NavAuth/NavAuth";

export default function Navigation() {
    return (
        <nav style={{display: "flex", justifyContent: "space-between"}}>
            <Link to="/">Logo</Link>
            <Link to="/contacts">Contacts</Link>
            <NavAuth />
        </nav>
    )
}
