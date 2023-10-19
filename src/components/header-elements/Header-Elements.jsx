import styles from './header-elements.module.css';

import PropTypes from 'prop-types';


function HeaderElements({ icon, text }) {
    return (
        <div className={styles.header_elements}>
            {icon}
            <span style={{ marginLeft: '8' }}>{text}</span>
        </div>
    )
}

HeaderElements.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
};


export default HeaderElements;
