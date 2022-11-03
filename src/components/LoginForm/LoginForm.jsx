import css from './LoginForm.module.css';
// Redux
// import { useDispatch } from "react-redux";
// import { addContact } from "redux/contacts/contacts-operation";

export default function LoginForm() {

    // const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        
        // const form = e.target;
        // const name = form.elements.name.value;
        // const phone = form.elements.phone.value;
        // const action = addContact({name, phone});
        // dispatch(action);
        // form.reset();
    }

    return (
        <form className={css.contactForm} onSubmit={handleSubmit}>
            <label className={css.contactForm__field}> Email
                <input className={css.contactForm__input}
                    type="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required
                />
            </label>
            
            <label className={css.contactForm__field}> Password
                <input className={css.contactForm__input}
                    type="password"
                    name="password"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    required
                />
            </label>
            
            <button className={css.contactForm__btn}type="submit">Login</button>
        </form>
    ) 
}