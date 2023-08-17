import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';

export default function AuthMenu() {
    return (
        <Box sx={{justifySelf: "end"}}>
            <Link component={RouterLink} to="/register" sx={{ mr: "10px"}} color="inherit" underline="none">Register</Link>
            <Link component={RouterLink} to="/login" color="inherit" underline="none">Login</Link>
        </Box>
    )
}
