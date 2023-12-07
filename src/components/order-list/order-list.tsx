
import styles from './order-list.module.css';
import {FC} from 'react';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
// import uuid from "react-uuid";

interface IorderList {
    time: string;
    price: number;
    name: string;
    number: number;
}

const OrderList: FC = () => {

    let orderDate: Date | null = null;
    
    return (
<li className={styles.card_order}> 
<span>
{/* <FormattedDate date={new Date(time as)} */}
{/* /> */}
</span>
</li>
    )
}

export default OrderList;
