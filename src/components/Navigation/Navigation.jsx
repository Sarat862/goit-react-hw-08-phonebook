//Components
import AuthMenu from "./AuthMenu/AuthMenu";
import UserMenu from "./UserMenu/UserMenu";
//Hooks
import { useAuth } from "shared/hooks/useAuth";
//MaterialUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

export default function Navigation() {

    const isLogin = useAuth();

    return (
        <AppBar position="static">
            <Toolbar sx={{justifyContent: "space-between"}}>
                <Link to="/" component={RouterLink} color="inherit" underline="none" >
                    <ContactsIcon />
                </Link>
                <Link to="/contacts" component={RouterLink} variant="h5" color="inherit" underline="none">Contacts</Link>
                {isLogin ? <UserMenu /> : <AuthMenu />}
            </Toolbar>
        </AppBar>
    )
}
