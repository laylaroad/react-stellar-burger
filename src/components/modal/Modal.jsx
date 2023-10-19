
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import ModalOverlay from '../modal-overlay/Modal-Overlay';

const modal = document.getElementById('modal-root');

function Modal({ children, onClose, title }) {
    useEffect(() => {
        const handleEsc = (evt) => {
            if (evt.key === 'Escape') onClose();
        }
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return createPortal(
        <ModalOverlay onClick={onClose}>
            <div className={styles.modal}>
                <div className={styles.modal_content}>
                    <button className={styles.close_button} onClick={onClose}>
                        <CloseIcon type="primary" />
                    </button>
                    <h2 className={`${styles.modal_title} text text_type_main-large`}>
                        {title}
                    </h2>
                </div>
                <div className={styles.modal_content_text}>  {children}</div>
            </div>
        </ModalOverlay >,

        modal
    );
}



export default Modal;
