import styles from './login.module.css';

import { EmailInput, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';

function Login() {


    return (
        <section className={styles.section_login}>

            <h2 className={`${styles.login_h2} text text_type_main-medium`}>Вход</h2>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <EmailInput
                    // onChange={onChange}
                    // value={value}
                    name={'email'}
                    isIcon={false}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <PasswordInput
                    // onChange={onChange}
                    // value={value}
                    name={'password'}
                    extraClass="mb-2"
                />
            </div>

            <Button htmlType="button" type="primary" size="large">
                Войти
            </Button>

            <div className={styles.paragraph_login}>
                <p className={`${styles.text_login} text_type_main-default text_color_inactive`}>Вы – новый пользователь?{''}
                    <Link to={'/register'}>

                        <Button htmlType="button" type="secondary" size="medium">
                            Зарегистрироваться
                        </Button>
                    </Link>
                </p>

                <p className={`${styles.text_login} text_type_main-default text_color_inactive`}>Забыли пароль?{''}
                    <Link to={'/forgot-password'}>

                        <Button htmlType="button" type="secondary" size="medium">
                            Восстановить пароль
                        </Button>
                    </Link>
                </p>
            </div>

        </section>

    )
}

export default Login;
