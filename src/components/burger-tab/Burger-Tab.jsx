
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-tab.module.css';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BurgerTab = forwardRef(({ current, setCurrent }, ref) => {
  return (
    <div className={styles.burger_tab}>
      <Tab ref={ref} value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab ref={ref} value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab ref={ref} value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
});

export default BurgerTab;

BurgerTab.propTypes = {
  current: PropTypes.string,
  setCurrent: PropTypes.string,
  ref: PropTypes.string,
}
