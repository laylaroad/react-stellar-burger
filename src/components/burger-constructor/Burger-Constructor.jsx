import styles from './burger-constructor.module.css';
import { LockIcon, Button, ConstructorElement, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';
import OrderDetails from '../order-details/Order-Details';
import PropTypes from 'prop-types';


const orderIngredients = [
  {
    text: 'Соус традиционный галактический',
    price: 30,
    thumbnail: 'https://code.s3.yandex.net/react/code/sauce-03.png',
  },
  {
    text: 'Мясо бессмертных моллюсков Protostomia',
    price: 300,
    thumbnail: 'https://code.s3.yandex.net/react/code/meat-02.png',
  },
  {
    text: 'Плоды Фалленианского дерева',
    price: 80,
    thumbnail: 'https://code.s3.yandex.net/react/code/sp_1.png',
  },
  {
    text: 'Хрустящие минеральные кольца',
    price: 80,
    thumbnail: 'https://code.s3.yandex.net/react/code/mineral_rings.png',
  },
];

const orderBunDetails = [
  {
    isLocked: true,
    text: 'Краторная булка N-200i',
    price: 20,
    thumbnail: 'https://code.s3.yandex.net/react/code/bun-02.png',
  },
];

function BunConstructor({ children }) {
  return (
    <>
      {orderBunDetails.map((bun, index) => (
        <ConstructorElement key={index}
          type="top"
          isLocked={bun.isLocked}
          text={`${bun.text}(верх)`}
          price={bun.price}
          thumbnail={bun.thumbnail}
          extraClass={styles.container_bun}
        />
      ))}
      <div>{children}</div>
      {orderBunDetails.map((bun, index) => (
        <ConstructorElement key={index}
          type="bottom"
          isLocked={bun.isLocked}
          text={`${bun.text}(низ)`}
          price={bun.price}
          thumbnail={bun.thumbnail}
          extraClass={styles.container_bun}
        />
      ))}
    </>
  );
}

function BurgerConstructor() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <section className={styles.burger_constructor}>
      <div>
        <BunConstructor>
          <ul className={styles.burger_wrapper}>
            {orderIngredients.map((ingredient, index) => (
              <li className={styles.burger_list} key={index}>
                <div className={styles.items_container}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    type={ingredient.type}
                    text={ingredient.text}
                    price={ingredient.price}
                    thumbnail={ingredient.thumbnail}
                  />
                </div>
              </li>
            ))}
          </ul>
        </BunConstructor>
      </div>
      <span className={styles.burger_sum}>
        <p className="text text_type_digits-medium mr-10">610
          <CurrencyIcon type="primary"
          /></p>

        <Button htmlType="button" type="primary" size="medium" onClick={openModal}>
          Оформить заказ
        </Button>
      </span>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

BunConstructor.propTypes = {
  children: PropTypes.element,
}


export default BurgerConstructor;
