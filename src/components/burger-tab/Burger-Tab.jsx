
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-tab.module.css';
import PropTypes from 'prop-types';

function BurgerTab({ current, setCurrent }) {
  return (
    <div className={styles.burger_tab}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

export default BurgerTab;

BurgerTab.propTypes = {
  current: PropTypes.string,
  onTabClick: PropTypes.func,
  ref: PropTypes.string,
}
