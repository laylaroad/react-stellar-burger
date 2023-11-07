
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-tab.module.css';
import PropTypes from 'prop-types';

function BurgerTab({ current }) {
  return (
    <div className={styles.burger_tab}>
      <Tab value="one" active={current === 'one'}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'}>
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
