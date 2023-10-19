import styles from './modal-overlay.module.css';
import React from 'react';

function ModalOverlay({ children, onClose }) {
    return (
        <div className={styles.modal_overlay} onClick={onClose}>
            {children}
        </div>
    );
}

export default ModalOverlay;
