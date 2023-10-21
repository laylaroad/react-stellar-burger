import styles from './header-elements.module.css';

import PropTypes from 'prop-types';


function HeaderElements({ icon, text }) {
    return (
        <span className={styles.header_elements}>
            {icon}
            <span className={styles.header_text}>{text}</span>
        </span>
    )
}

HeaderElements.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
};


export default HeaderElements;
