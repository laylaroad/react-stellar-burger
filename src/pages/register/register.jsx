import styles from './register.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { register } from '../../services/thunk/user-thunk';

import { Input, EmailInput, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';

function Register() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onSubmitRegister = async (e) => {
        e.preventDefault();
        dispatch(register({ email, password: password, name }))
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error("Ошибка при регистрации пользователя ", error);
            });
    };



    return (
        <section className={styles.section_register}>
            <h2 className={`${styles.register_h2} text text_type_main-medium`}>Регистрация</h2>
            <form onSubmit={onSubmitRegister}>

                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    value={name}
                    name={"name"}
                    onChange={(e) => setName(e.target.value)}
                    extraClass="mb-2"
                />

                <EmailInput
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    isIcon={false}
                />
                <PasswordInput
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                    extraClass="mb-2"
                />

            </form>
            <Button htmlType="button" type="primary" size="large">
                Зарегистрироваться
            </Button>
            <p className={`${styles.p} text_type_main-default text_color_inactive`}>Уже зарегистрированы? {''}
                <Link to={'/login'}>

                    <Button htmlType="button" type="secondary" size="medium">
                        Войти
                    </Button>
                </Link>
            </p>
        </section>
    )
}

export default Register;
