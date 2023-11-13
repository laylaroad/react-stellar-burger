import styles from './profile-menu.module.css';

import { NavLink, Outlet } from 'react-router-dom';

import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';


function ProfileMenu({ isActive }) {

    const isActiveLink = isActive ? `${styles.link_active}` : `${styles.link_disactive}`;

    return (
        <>
            <section className={styles.profile_section}>

                <div className={styles.profile_wrapper}>
                    <ul className={`${styles.profile_nav} text text_type_main-medium mt-8 mb-8`}>
                        <NavLink
                            to={'/profile-edit'}
                            className={isActiveLink}>
                            Профиль
                        </NavLink>
                        <NavLink
                            to={'/orders'}
                            className={isActiveLink}>
                            История заказов
                        </NavLink>
                        <NavLink
                            to={'/'}
                            className={isActiveLink}>
                            Выход
                        </NavLink>
                    </ul>
                    <p className="text_type_main-default text_color_inactive mb-20">В этом разделе вы можете изменить свои персональные данные.</p>
                </div>


                <div className={styles.profile_inputs}>

                    <Input type={'text'}
                        placeholder={'Имя'}
                        icon="EditIcon"
                        extraClass="mb-2" />

                    <Input type={'text'}
                        placeholder={'Логин'}
                        icon="EditIcon"
                        extraClass="mb-2" />

                    <PasswordInput
                        name={'password'}
                        extraClass="mb-2"
                        disabled={false}
                    />
                    <div className={styles.buttons}>
                        <Button htmlType="button" type="secondary" size="medium">
                            Отмена
                        </Button>

                        <Button htmlType="button" type="primary" size="medium">
                            Сохранить
                        </Button>
                    </div>
                </div>
            </section>
            <Outlet />
        </>
    )

}

export default ProfileMenu;
