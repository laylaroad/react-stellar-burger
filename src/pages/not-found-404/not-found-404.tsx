
import styles from './not-found-404.module.css';
import {FC} from 'react';

const NotFound404: FC = () => {
  return (
    <>
      <h1 className={`${styles.not_found_text} text text_type_main-large mt-8`}>404</h1>
      <h2 className={`${styles.not_found_text} text text_type_main-large mt-8 mb-16`}>Такой страницы не существует</h2>
    </>
  )
};

export default NotFound404;
