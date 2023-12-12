import styles from './reset-password.module.css';
import { FC, FormEvent, ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/react-redux';

import { fetchResetPass } from '../../services/thunk/user-thunk';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';


const ResetPassword: FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [errorPassword, seterrorPassword] = useState(false);

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleToken = (event: ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value);
    };

    const handletoRestorePass = async (e: FormEvent) => {
        e.preventDefault();
        try {
            dispatch(fetchResetPass({ password, token }));
            navigate('/login');
        } catch (error) {
            console.error('Ошибка', error);
        }
    };

    return (
        <section className={styles.reset_password}>
            <h2 className={`${styles.reset_password_title} text text_type_main-medium`}>Восстановление пароля</h2>
            <form className={styles.form}
                onSubmit={handletoRestorePass}>
                <PasswordInput
                    onChange={handlePasswordChange}
                    value={password}
                    name={'password'}
                    icon={'ShowIcon'}
                    placeholder={'Введите новый пароль'}
                    extraClass="mb-2"
                />
                {!seterrorPassword &&
                    <Input
                        type={'text'}
                        error={false}
                        placeholder={'Введите код из письма'}
                        value={token}
                        onChange={handleToken}
                        extraClass="mb-2" />}


                <Button
                    disabled={!token}
                    htmlType="submit"
                    type="primary"
                    size="large">

                    Сохранить
                </Button>
            </form>
            <p className={`${styles.reset_password_paragraph} text_type_main-default text_color_inactive`}>Вспомнили пароль?{''}
                <Link to={'/login'}>

                    <Button htmlType="button" type="secondary" size="medium">
                        Войти
                    </Button>
                </Link>
            </p>
        </section>

    )
}

export default ResetPassword;
