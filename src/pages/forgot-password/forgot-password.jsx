import styles from './forgot-password.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchForgotPass } from '../../services/thunk/user-thunk';
import { setEmailChecked } from '../../services/reducers/userReducer';

import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';

function ForgotPassword() {

    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleToRestorePass = async (e) => {
        e.preventDefault();
        try {
            dispatch(fetchForgotPass(email));
            dispatch(setEmailChecked(true))
            navigate('/reset-password');
        } catch (error) {
            console.error("Ошибка", error);
        }
    };

    return (

        <section className={styles.forgot_password}>
            <h2 className={`${styles.forgot_password_title} text text_type_main-medium`}>Восстановление пароля</h2>
            <form
                className={styles.form}
                onSubmit={handleToRestorePass}>
                <EmailInput
                    onChange={handleEmailChange}
                    value={email}
                    name={'email'}
                    isIcon={false}
                />

                <Button
                    htmlType="submit"
                    type="primary"
                    size="large">
                    Воссстановить
                </Button>
            </form>
            <p className={`${styles.forgot_password_paragraph} text_type_main-default text_color_inactive`}>Вспомнили пароль?{''}
                <Link to={'/login'}>
                    <Button htmlType="button" type="secondary" size="medium">
                        Войти
                    </Button>
                </Link>
            </p>
        </section>
    )
}

export default ForgotPassword;









    // const handleToRestorePass = async () => {
    //     const apiUrl = 'https://norma.nomoreparties.space/api';
    //     const endPoint = './password-reset';
    //     const options = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json;charset=utf-8' },
    //         body: JSON.stringify({ email }),
    //     }

    //     const res = await fetch(`${apiUrl}/${endPoint}`, options)
    //     const data = await res.json();

    //     if (data.success) {
    //         navigate('/reset-password');
    //     }
    // };
