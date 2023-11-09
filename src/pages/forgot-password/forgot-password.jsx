import styles from './forgot-password.module.css';

import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom'

function ForgotPassword() {

    return (

        <section className={styles.forgot_password}>
            <h2 className={`${styles.forgot_password_title} text text_type_main-medium`}>Восстановление пароля</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <EmailInput
                    // onChange={onChange}
                    // value={value}
                    name={'email'}
                    isIcon={false}
                />
            </div>

            <Button htmlType="button" type="primary" size="large">
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
