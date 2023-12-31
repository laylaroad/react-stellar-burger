import styles from './modal.module.css';
import { FC, ReactNode } from 'react';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modal = document.getElementById('modal-root') as HTMLElement;

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
    title: string;
}

const Modal: FC<ModalProps> = ({ children, onClose, title }) => {

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            console.log(event);
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscapeKey);


        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

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
        modal,
    );
}


export default Modal;
