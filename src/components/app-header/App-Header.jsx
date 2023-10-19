
import styles from './app-header.module.css';

import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import HeaderElements from '../header-elements/Header-Elements';

// import PropTypes from 'prop-types';

function AppHeader() {
    return (

        <header className={`${styles.header} text_type_main-default pt-4 pb-4`}>
            <div className={styles.header_menu}>

                <nav className={styles.header_nav}>

                    <HeaderElements
                        icon={<BurgerIcon type="primary" />}
                        text={'Конструктор'}
                        isActive={true}

                    />

                    <HeaderElements
                        icon={<ListIcon type="secondary" />}
                        text={'Лента заказов'}

                    />

                </nav>

                <Logo />

                <HeaderElements
                    icon={<ProfileIcon type="secondary" />}
                    text={'Личный кабинет'}

                />

            </div>

        </header>


    )
}

// AppHeader.propTypes = {
//     icon: PropTypes.node.isRequired,
//     text: PropTypes.string,
// };

export default AppHeader;
