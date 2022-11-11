import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

export default function AuthMenu() {
    return (
        <Toolbar disableGutters>
            <Link component={RouterLink} to="/register" sx={{ mr: "10px"}} color="inherit" underline="none">Register</Link>
            <Link component={RouterLink} to="/login" color="inherit" underline="none">Login</Link>
        </Toolbar>
    )
}
