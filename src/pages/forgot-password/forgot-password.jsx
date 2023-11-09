import styles from './forgot-password.module.css';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';

function ForgotPassword() {

    return (
        <section className={styles.forgot_password}>
            <h2 className={styles.forgot_password_h2}>Восстановление пароля</h2>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <PasswordInput
                    // onChange={onChange}
                    // value={value}
                    name={'Введите новый пароль'}
                    extraClass="mb-2"
                />
            </div>

            <Input type={'text'} placeholder={'Введите код из письма'} extraClass="mb-2" />


            <Button htmlType="button" type="primary" size="large">
                Сохранить
            </Button>

            <p className={`${styles.p_forgot_password} text_type_main-default text_color_inactive`}>Вспомнили пароль?{''}
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
