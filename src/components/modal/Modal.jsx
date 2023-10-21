import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import ModalOverlay from '../modal-overlay/Modal-Overlay';
import PropTypes from 'prop-types';

const modal = document.getElementById('modal-root');

function Modal({ children, onClose, title }) {

    useEffect(() => {
        const handleEscapeKey = (event) => {
            console.log(event);
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [onClose]);

    return createPortal(
        <ModalOverlay onClose={onClose}>
            <div className={styles.modal}>
                <header className={styles.modal_card}>
                    <h2 className={`${styles.modal_title} text text_type_main-large`}>
                        {title}</h2>
                    <button className={styles.close_button} onClick={onClose}>
                        <CloseIcon type="primary" />
                    </button>

                </header>
                <div>{children}</div>
            </div>
        </ModalOverlay>,
        modal
    );
}

Modal.propTypes = {
    children: PropTypes.element,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
}

export default Modal;
