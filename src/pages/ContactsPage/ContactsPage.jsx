import { useEffect } from "react";
// Components
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getState } from 'redux/contacts/contacts-selectors';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from "redux/contacts/contacts-operation";

export const ContactsPage = () => {

    const contacts = useSelector(getFilteredContacts);
    const { loading, error } = useSelector(getState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />
            {contacts.length > 0 && <ContactList />} 
            {loading && <p style={{color: "blue", marginLeft: "20px"}}>...Loading</p>}
            {error && <p>Oops, something went wrong</p>}
        </div>
    );
}

export default ContactsPage;