import styles from './burger-constructor.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {

    return (
        <section className={styles.burger_constructor}>
            <div className={styles.container_empty}>
            </div>
            <span className={styles.burger_sum}>
                <p className="text text_type_digits-medium mr-10">
                    610
                    <CurrencyIcon type="primary" extraClass={styles.currency} />
                </p>
                <Button htmlType="button" type="primary" size="medium">
                    Оформить заказ
                </Button>
            </span>

        </section>
    );
};

export default BurgerConstructor;
