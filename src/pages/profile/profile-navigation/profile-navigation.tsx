import styles from './profile-navigation.module.css';
import { FC, MouseEventHandler } from 'react';
import { logout } from '../../../services/thunk/user-thunk';
import { NavLink, Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/react-redux';

interface ProfileNavigationProps {
    isActive?: boolean
}

const ProfileNavigation: FC<ProfileNavigationProps> = ({ isActive }) => {


    const isActiveLink = isActive ? `${styles.link_active}` : `${styles.link_disactive}`;

    const dispatch = useAppDispatch();
    const handleLogOut = () => {
        console.log('выход');
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
                            to={'/profile/orders'}
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
