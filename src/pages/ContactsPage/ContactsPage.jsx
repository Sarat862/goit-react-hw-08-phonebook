import { useEffect } from "react";
import { toast } from 'react-toastify';
// Components
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getState } from 'redux/contacts/contacts-selectors';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from "redux/contacts/contacts-operation";
//MaterialUI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const ContactsPage = () => {

    const contacts = useSelector(getFilteredContacts);
    const { loading, error } = useSelector(getState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container component="main">
            <Box sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <Typography component="h1" variant="h2">Phonebook</Typography>
                <ContactForm />
            
                <Typography component="h2" variant="h4">Contacts</Typography>
                <Filter />
            </Box>
            {loading && <CircularProgress sx={{ml: 12}} />}
            {contacts.length > 0 && <ContactList />} 
            {error && toast.error("Oops, something went wrong") }
        </Container>
    );
}

export default ContactsPage;