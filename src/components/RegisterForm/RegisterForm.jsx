// Redux
import { useDispatch } from "react-redux";
import { signup } from "redux/auth/auth-operation";
// MaterialUI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function RegisterForm() {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        const action = signup({name, email, password});
        dispatch(action);
        form.reset();
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <TextField
                    required
                    fullWidth
                    name="name"
                    id="name"
                    label="Name"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
        </Box>
    ) 
}