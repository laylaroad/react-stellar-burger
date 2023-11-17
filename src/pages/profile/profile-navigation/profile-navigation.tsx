import styles from './profile-navigation.module.css';

import {FC} from 'react';

import { useDispatch } from 'react-redux';
import { logout } from '../../../services/thunk/user-thunk';

import { NavLink, Outlet } from 'react-router-dom';

interface ProfileNavigationProps {
    isActive?: boolean
}

const ProfileNavigation: FC<ProfileNavigationProps> = ({ isActive })=>  {

    const dispatch = useDispatch();

    const isActiveLink = isActive ? `${styles.link_active}` : `${styles.link_disactive}`;

    const handleLogOut = () => {
        dispatch(logout());
    };

    return (
        <>
            <section className={styles.profile_section}>

                <div className={styles.profile_wrapper}>
                    <ul className={`${styles.profile_nav} text text_type_main-medium mt-8 mb-8`}>
                        <NavLink
                            to={'/profile'}
                            className={isActiveLink}>
                            Профиль
                        </NavLink>
                        <NavLink
                            to={'/orders'}
                            className={isActiveLink}>
                            История заказов
                        </NavLink>
                        <NavLink
                            onClick={handleLogOut}
                            to={'/'}
                            className={isActiveLink}>
                            Выход
                        </NavLink>
                    </ul>
                    <p className="text_type_main-default text_color_inactive mb-20">В этом разделе вы можете изменить свои персональные данные.</p>
                </div>
                <Outlet />

            </section>
        </>
    )

}

export default ProfileNavigation;
