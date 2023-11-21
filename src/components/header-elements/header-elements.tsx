import {FC} from 'react';
import styles from './header-elements.module.css';
import { NavLink } from 'react-router-dom';

interface HeaderElementsProps {
  icon: React.ReactNode;
  text: string;
  link: string;
  isActive?: boolean;
}

const HeaderElements: FC<HeaderElementsProps> = ({ icon, text, link, isActive }) => {
  const isActiveLink = isActive ? styles.link_active : styles.link_disactive;

  return (
    <span className={styles.header_elements}>
      {icon}
      <NavLink to={link} className={`${styles.header_text} ${isActiveLink}`}>
        {text}
      </NavLink>
    </span>
  );
};

export default HeaderElements;
