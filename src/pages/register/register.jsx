import styles from './register.module.css';
import { Input, EmailInput, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';

function Register() {

    // const [value, setValue] = React.useState('password')
    // const onChange = e => {
    //     setValue(e.target.value)
    // }

    // const [value, setValue] = React.useState('bob@example.com')
    // const onChange = e => {
    //     setValue(e.target.value)
    // }

    return (
        <section className={styles.section_register}>
            <h2 className={`${styles.register_h2} text text_type_main-medium`}>Регистрация</h2>

            <Input type={'text'} placeholder={'Имя'} extraClass="mb-2" />

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
