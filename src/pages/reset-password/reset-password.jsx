import styles from './reset-password.module.css';

import { useState } from 'react';

import { resetPassword } from '../../utils/api';

import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';

function ResetPassword() {

    const [password, setPassword] = useState('password')
    const onChange = e => {
        setPassword(e.target.password)
    }

    const handleResetPassword = () => {
        resetPassword(password);
    }

    return (
        <section className={styles.reset_password}>
            <h2 className={`${styles.reset_password_title} text text_type_main-medium`}>Восстановление пароля</h2>

            <PasswordInput
                onChange={onChange}
                value={password}
                name={'password'}
                icon={'ShowIcon'}
                error={false}
                placeholder={'Введите новый пароль'}
                extraClass="mb-2"
            />

            <Input
                type={'text'}
                error={false}
                placeholder={'Введите код из письма'}
                extraClass="mb-2" />


            <Button htmlType="button"
                type="primary"
                onClick={handleResetPassword}
                size="large">

                Сохранить
            </Button>

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
