import css from './ContactForm.module.css';
// Redux
import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/contacts-operation";

export const ContactForm = () => {

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const name = form.elements.name.value;
        const phone = form.elements.phone.value;
        const action = addContact({name, phone});
        dispatch(action);
        form.reset();
    }

    return (
        <form className={css.contactForm} onSubmit={handleSubmit}>
            <label className={css.contactForm__field}> Name
                <input className={css.contactForm__input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            
            <label className={css.contactForm__field}> Number
                <input className={css.contactForm__input}
                    type="tel"
                    name="phone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            
            <button className={css.contactForm__btn}type="submit">Add contact</button>
        </form>
    ) 
}