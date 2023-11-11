import styles from './login.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { EmailInput, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';

function Login() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (evt) => {
        setEmail(evt.target.value);
    };
    const onChangePass = (evt) => {
        setPassword(evt.target.value);
    };

    // const handleCLick = () => {
    //     dispatch(login(email, password));
    // };

    return (
        <section className={styles.section_login}>

            <h2 className={`${styles.login_h2} text text_type_main-medium`}>Вход</h2>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <EmailInput
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="E-mail"
                    name={'email'}
                    isIcon={false}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <PasswordInput
                    value={password}
                    placeholder="Пароль"
                    onChange={onChangePass}
                    name={'password'}
                    extraClass="mb-2"
                />
            </div>

            <Button
                htmlType="button"
                type="primary"
                size="large">
                Войти
            </Button>

            <div className={styles.paragraph_login}>
                <p className={`${styles.text_login} text_type_main-default text_color_inactive`}>Вы – новый пользователь?{''}
                    <Link to={'/register'}>

                        <Button htmlType="button"
                            type="secondary"
                            size="medium">
                            Зарегистрироваться
                        </Button>
                    </Link>
                </p>

                <p className={`${styles.text_login} text_type_main-default text_color_inactive`}>Забыли пароль?{''}
                    <Link to={'/forgot-password'}>

                        <Button htmlType="button"
                            type="secondary"
                            size="medium">
                            Восстановить пароль
                        </Button>
                    </Link>
                </p>
            </div>

        </section>

    )
}

export default Login;
