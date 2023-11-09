import styles from './profile.module.css';

import { NavLink } from 'react-router-dom';

import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';


function Profile({ isActive }) {

    const isActiveText = isActive ? `${styles.link_disactive}` : `${styles.link_active}`;

    return (
        <section className={styles.profile_section}>

            <div className={styles.profile_wrapper}>
                <ul className={`${styles.profile_nav} text text_type_main-medium mt-8 mb-8`}>
                    <NavLink to={'/profile'} className={isActiveText}>Профиль</NavLink>
                    <NavLink to={'/profile/orders'} className={isActiveText}>История заказов</NavLink>
                    <NavLink to={'/'} className={isActiveText}>Выход</NavLink>
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

            </div>

        </section>
    )
}

export default Profile;
