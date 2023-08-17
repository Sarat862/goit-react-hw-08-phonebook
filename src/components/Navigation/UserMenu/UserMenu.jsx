import { useDispatch, useSelector } from "react-redux";
//Redux
import { logout } from "redux/auth/auth-operation";
import { getUser } from "redux/auth/auth-selectors";
//MaterialUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function UserMenu() {

    const user = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <Box sx={{ justifySelf: "end", display: "flex", alignItems: "center"}}  >
            <AccountCircleIcon />
            <Typography sx={{ml: "2px", mr: "10px"}} color="#000" variant="body1" fontWeight="bold"> {user.email} </Typography>
            <Button onClick={onLogout} variant="outlined" color="inherit" size="small">Logout</Button>
        </Box>
    )
}