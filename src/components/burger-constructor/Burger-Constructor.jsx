import styles from './burger-constructor.module.css';
import { LockIcon, Button, ConstructorElement, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import Modal from '../modal/Modal';
import { useState } from 'react';
import OrderReady from '../order-ready/Order-Ready';


const orderIngredients = [
  {
    type: "top",
    isLocked: true,
    text: "Краторная булка N-200i",
    price: 200,
    thumbnail: 'https://code.s3.yandex.net/react/code/bun-02.png',
  },
  {
    text: "Соус традиционный галактический",
    price: 50,
    thumbnail: 'https://code.s3.yandex.net/react/code/sauce-03.png',
  },
  {
    text: "Мясо бессмертных моллюсков Protostomia",
    price: 50,
    thumbnail: 'https://code.s3.yandex.net/react/code/meat-02.png',
  },
  {
    text: "Плоды Фалленианского дерева",
    price: 50,
    thumbnail: 'https://code.s3.yandex.net/react/code/sp_1.png',
  },
  {
    text: "Хрустящие минеральные кольца",
    price: 50,
    thumbnail: 'https://code.s3.yandex.net/react/code/mineral_rings.png',
  },
  {
    type: "bottom",
    isLocked: true,
    text: "Краторная булка N-200i",
    price: 200,
    thumbnail: 'https://code.s3.yandex.net/react/code/bun-02.png',
  },
];

function BurgerConstructor() {

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const openOrderModal = () => {
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <section className={styles.burger_constructor}>
      <ul className={styles.burger_wrapper}>
        {orderIngredients.map((ingredient, index) => (
          <li style={{ margin: '0', padding: '0', listStyle: 'none' }} key={index}>
            <div className={styles.items_container}>
              <DragIcon type="primary" />
              <ConstructorElement
                type={ingredient.type}
                isLocked={ingredient.isLocked}
                text={ingredient.text}
                price={ingredient.price}
                thumbnail={ingredient.thumbnail}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.burger_sum}>
        <p className="text text_type_digits-medium mr-8">610
          <CurrencyIcon type="primary" />
        </p>
        <Button htmlType="button" type="primary" size="medium" onClick={openOrderModal}>
          Оформить заказ
        </Button>
      </div>

      {isOrderModalOpen && (
        <Modal onClose={closeOrderModal}>
          <OrderReady />
        </Modal>
      )}

    </section>
  );
}




export default BurgerConstructor;
