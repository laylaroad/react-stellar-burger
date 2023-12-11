import { FC, useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { pathUserData } from '../../../services/thunk/user-thunk';
import { selectUser } from '../../../services/selectors/userSelector';

import styles from './profile-main.module.css';

const ProfileMain: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [isEdit, setIsEdit] = useState(false);

  const [values, setValues] = useState<{ name: string; email: string; password: string; disabled: boolean }>({
    name: user?.username || '',
    email: user?.email || '',
    password: '',
    disabled: true,
  });

  const handleReset = () => {
    setIsEdit(false);
    if (user?.name && user.email) {
      setValues({
        name: user.name,
        email: user.email,
        password: '',
        disabled: true,
      });
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsEdit(false);
    //@ts-ignore
    dispatch(pathUserData(values));
    localStorage.removeItem('userData');
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;
    setValues({ ...values, [target.name]: target.value });
    setIsEdit(true);
  };

  useEffect(() => {
    if (user?.name && user.email) {
      setValues({
        name: user.name,
        email: user.email,
        password: '',
        disabled: true,
      });
    }
  }, [user?.name, user?.email]);

  return (
    <section>
      <form onSubmit={handleSubmit} className={styles.profile_inputs}>
        <Input
          type={'text'}
          value={values.name}
          onChange={handleChange}
          placeholder={'Имя'}
          icon="EditIcon"
          extraClass="mb-2"
        />
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={'email'}
          placeholder="Логин"
          isIcon={true}
          autoComplete="email"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name={'password'}
          extraClass="mb-2"
          disabled={false}
        />
        <div className={styles.buttons}>
          <Button htmlType="button" type="secondary" size="medium" onClick={handleReset}>
            Отмена
          </Button>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ProfileMain;
