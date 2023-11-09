
import styles from './no-page.module.css';

function NoPage() {
  return (
    <>
      <h1 className={`${styles.not_found_text} text text_type_main-large mt-8`}>404</h1>
      <h2 className={`${styles.not_found_text} text text_type_main-large mt-8 mb-16`}>Такой страницы не существует</h2>
    </>
  )
};

export default NoPage;