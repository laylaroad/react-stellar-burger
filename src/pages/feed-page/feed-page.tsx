import {useLocation} from 'react-router-dom'
import {FC} from 'react';
import styles from 'feed-page.module.css';

const FeedPage: FC = () => {
    const location = useLocation();

    return (
        <section className={styles.feed}>
      <h1 className={styles.title}>
        Лента заказов
      </h1>
      <div>
       {/* {Компонент заказа} */}
      </div>
      <div>
        {/* {Компонент оплаты заказа} */}
      </div>
    </section>
    )
};

export default FeedPage;
