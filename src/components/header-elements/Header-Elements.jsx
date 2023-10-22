import styles from './header-elements.module.css';

import PropTypes from 'prop-types';

function HeaderElements({ icon, text, isActive }) {

    const isActiveText = isActive ? 'false' : 'text_color_active';

    return (
        <span className={styles.header_elements}>
            {icon}
            <span className={`{styles.header_text} ${isActiveText}`}>{text}</span>
        </span>
    )
}

HeaderElements.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
};


export default HeaderElements;
