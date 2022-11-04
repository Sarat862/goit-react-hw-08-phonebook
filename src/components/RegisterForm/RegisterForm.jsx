import { Navigate } from 'react-router-dom';
import css from './RegisterForm.module.css';
// Redux
import { useDispatch, useSelector } from "react-redux";
import { signup } from "redux/auth/auth-operation";
import { isLogin } from 'redux/auth/auth-selectors';

export default function RegisterForm() {

    const isUserLogin = useSelector(isLogin);
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

    if (isUserLogin) {
        return <Navigate to="/contacts" />
    }

    return (
        <form className={css.contactForm} onSubmit={handleSubmit}>
            <label className={css.contactForm__field}> Name
                <input className={css.contactForm__input}
                    type="text"
                    name="name"
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                />
            </label>

            <label className={css.contactForm__field}> Email
                <input className={css.contactForm__input}
                    type="email"
                    name="email"
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required
                />
            </label>
            
            <label className={css.contactForm__field}> Password
                <input className={css.contactForm__input}
                    type="password"
                    name="password"
                    required
                />
            </label>
            
            <button className={css.contactForm__btn}type="submit">Register</button>
        </form>
    ) 
}