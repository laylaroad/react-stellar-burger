
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-tab.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const BurgerTab = React.forwardRef(({ current, onTabClick }, ref) => {
  return (
    <div className={styles.burger_tab} ref={ref}>
      <Tab value="one" active={current === 'one'} onClick={() => onTabClick('one')}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={() => onTabClick('two')}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={() => onTabClick('three')}>
        Начинки
      </Tab>
    </div>
  );
});

export default BurgerTab;

BurgerTab.propTypes = {
  current: PropTypes.string,
  onTabClick: PropTypes.func,
  ref: PropTypes.string,
}
