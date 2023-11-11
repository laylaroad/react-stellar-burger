import styles from './forgot-password.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router';

import { forgotPassword } from '../../utils/api';

import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';

function ForgotPassword() {

    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleToRestorePass = () => {
        forgotPassword(email).then((res) => {
            res.success && navigate('./reset-password');
        });
    };

    return (

        <section className={styles.forgot_password}>
            <h2 className={`${styles.forgot_password_title} text text_type_main-medium`}>Восстановление пароля</h2>

            <EmailInput
                onChange={handleEmailChange}
                email={email}
                name={'email'}
                isIcon={false}
            />

            <Button
                htmlType="button"
                onClick={handleToRestorePass}
                type="primary"
                size="large">
                Воссстановить
            </Button>

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
