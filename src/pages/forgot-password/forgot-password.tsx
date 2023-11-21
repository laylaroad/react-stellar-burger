import React, { useState, FC, ChangeEvent, FormEvent } from 'react';
import styles from './forgot-password.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { fetchForgotPass } from '../../services/thunk/user-thunk';
import { setEmailChecked } from '../../services/reducers/userReducer';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const ForgotPassword: FC = () => {
  const [email, setEmail] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleToRestorePass = async (e: FormEvent) => {
    e.preventDefault();
    try {
        //@ts-ignore
      dispatch(fetchForgotPass(email));
      dispatch(setEmailChecked(true));
      navigate('/reset-password');
    } catch (error) {
      console.error('Ошибка', error);
    }
  };

  return (
    <section className={styles.forgot_password}>
      <h2 className={`${styles.forgot_password_title} text text_type_main-medium`}>
        Восстановление пароля
      </h2>
      <form className={styles.form} onSubmit={handleToRestorePass}>
        <EmailInput
          onChange={handleEmailChange}
          value={email}
          name={'email'}
          isIcon={false}
        />!
        <Button 
        disabled={!email}
        htmlType="submit" 
        type="primary" 
        size="large">
          Восстановить
        </Button>
      </form>
      <p
        className={`${styles.forgot_password_paragraph} text_type_main-default text_color_inactive`}
      >
        Вспомнили пароль?
        <Link to={'/login'}>
          <Button htmlType="button" type="secondary" size="medium">
            Войти
          </Button>
        </Link>
      </p>
    </section>
  );
};

export default ForgotPassword;
