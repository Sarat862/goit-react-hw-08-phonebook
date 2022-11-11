// Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from "redux/contacts/contacts-operation";
//MaterialUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

export function ContactList() {
  
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onRemoveContact = (id) => {
    const action = deleteContact(id);
    dispatch(action);
  }

  return (
    <List>
      {contacts.map(({ id, name, number }) => 
        <ListItem key={id}>
          <Typography variant="h5">
            {name}: {number}
          </Typography>
          <DeleteIcon
            fontSize="large"
            color="secondary"
            onClick={() => onRemoveContact(id)}
          >
          </DeleteIcon>          
        </ListItem>
      )}
    </List>
  )
}