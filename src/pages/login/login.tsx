import styles from './login.module.css';

import { useState, FC, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { login } from '../../services/thunk/user-thunk';
import { setAuthChecked } from '../../services/reducers/userReducer';

import { EmailInput, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';

const Login: FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (evt: ChangeEvent<HTMLInputElement>) => {
        setEmail(evt.target.value);
    };
    const onChangePass = (evt: ChangeEvent<HTMLInputElement> ) => {
        setPassword(evt.target.value);
    };

    const handleLogin = async (e: FormEvent ) => {
        e.preventDefault();
        try {
            //@ts-ignore
            dispatch(login({ email, password }));
            dispatch(setAuthChecked(true))
            navigate('/');
        } catch (error) {
            console.error("Ошибка", error);
            navigate('/forgot-password');
        }
    };

    return (
        <section className={styles.section_login}>

            <h2 className={`${styles.login_h2} text text_type_main-medium`}>Вход</h2>
            <form className={styles.form}
                onSubmit={handleLogin}>
                <EmailInput
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="E-mail"
                    name={'email'}
                    isIcon={false}
                />

                <PasswordInput
                    value={password}
                    placeholder="Пароль"
                    onChange={onChangePass}
                    name={'password'}
                    extraClass="mb-2"
                />


                <Button
                    htmlType="submit"
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
            </form>

        </section>

    )
}

export default Login;
