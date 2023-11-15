import styles from './header-elements.module.css';

import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

function HeaderElements({ icon, text, link, isActive }) {

    const isActiveLink = isActive ? `${styles.link_active}` : `${styles.link_disactive}`;

    return (
        <span className={styles.header_elements}>
            {icon}
            <NavLink to={link} className={`{styles.header_text} ${isActiveLink}`}>{text}</NavLink>
        </span>
    )
}

HeaderElements.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
};


export default HeaderElements;
