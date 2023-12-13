import { FC } from 'react';
import styles from './header-elements.module.css';
import { NavLink } from 'react-router-dom';

interface HeaderElementsProps {
  icon: React.ReactNode;
  text: string;
  path: string;
  isActive?: boolean;
}

const HeaderElements: FC<HeaderElementsProps> = ({ icon, text, path, isActive }) => {
  const isActiveLink = isActive ? styles.link_active : styles.link_disactive;

  return (
    <span className={styles.header_elements}>
      {icon}
      <NavLink to={path} className={`${styles.header_text} ${isActiveLink}`}>
        <span className={`${isActiveLink} text text_type_main-default`}>{text}</span>
      </NavLink>
    </span>
  );
};

export default HeaderElements;
