// Redux
import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/contacts-operation";
// MaterialUI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const ContactForm = () => {

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const action = addContact({name, number});
        dispatch(action);
        form.reset();
    }

    return (

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>             
                <Grid item xs={12}>
                    <TextField
                    size="small"
                    required
                    fullWidth
                    id="name"
                    type="text"
                    label="Name"
                    name="name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    size="small"
                    required
                    fullWidth
                    name="number"
                    label="Number"
                    type="number"
                    id="number"
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
        </Box>
    ) 
}