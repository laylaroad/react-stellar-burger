
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-tab.module.css';
import { forwardRef } from 'react';

function BurgerTab({ current, setCurrent }) {
  // const [current, setCurrent] = React.useState('one')

  // const setScroll = (ref) => {
  //   ref.scrollIntoView({ behavior: 'smooth' });


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
  )
}

export default BurgerTab;
