
import styles from './app-header.module.css';
import { FC } from 'react';

import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';

import HeaderElements from '../header-elements/header-elements';


const AppHeader: FC = () => {

    const { pathname } = useLocation();

    return (

        <header className={`${styles.header} text_type_main-default pt-4 pb-4`}>
            <nav className={styles.header_menu}>
                <ul className={styles.header_nav}>

                    <HeaderElements
                        icon={<BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />}
                        text="Конструктор"
                        path={'/'}
                    />

                    <HeaderElements
                        icon={<ListIcon type={pathname === "/feed" ? "primary" : "secondary"} />}
                        text="Лента заказов"
                        path={'/feed'}
                    />

                </ul>

                <div className={styles.logo}>
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>

                <HeaderElements
                    icon={<ProfileIcon type={pathname === "/" ? "primary" : "secondary"} />}
                    text="Личный кабинет"
                    path={'/profile'}
                />

            </nav>

        </header>


    )
}

export default AppHeader;
