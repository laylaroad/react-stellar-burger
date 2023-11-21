
import styles from './app-header.module.css';
import { FC } from 'react';

import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import HeaderElements from '../header-elements/header-elements';


const AppHeader: FC = () => {


    return (

        <header className={`${styles.header} text_type_main-default pt-4 pb-4`}>
            <nav className={styles.header_menu}>

                <ul className={styles.header_nav}>

                    <HeaderElements
                        icon={<BurgerIcon type="primary" />}
                        text="Конструктор"
                        isActive={true}
                        link={'/'}
                    />

                    <HeaderElements
                        icon={<ListIcon type="secondary" />}
                        text="Лента заказов"
                        isActive={false}
                        link={'/profile/order'}
                    />

                </ul>

                <div className={styles.logo}>
      <Link to="/">
        <Logo />
      </Link>
    </div>

                <HeaderElements
                    icon={<ProfileIcon type="secondary" />}
                    text="Личный кабинет"
                    isActive={false}
                    link={'/profile'}
                />

            </nav>

        </header>


    )
}

export default AppHeader;
