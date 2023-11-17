import { FC, ReactNode } from 'react';
import styles from './modal-overlay.module.css';

interface ModalOverlayProps {
    children: ReactNode;
    onClose: () => void;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ children, onClose }) => {

    const handleOverlay = (evt: React.MouseEvent<HTMLDivElement>) => {
        if (evt.target === evt.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.modal_overlay} onClick={handleOverlay}>
            {children}
        </div>
    );
};

export default ModalOverlay;
