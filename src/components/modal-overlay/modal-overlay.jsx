import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay({ children, onClose }) {
    const handleOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
            onClose();
        }
    }

    return (
        <div className={styles.modal_overlay} onClick={handleOverlay}>
            {children}
        </div>
    );
}

ModalOverlay.propTypes = {
    children: PropTypes.element,
    onClose: PropTypes.func,
}

export default ModalOverlay;
