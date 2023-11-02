
// import styles from './burger.module.css';
// import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
// import { useSelector } from 'react-redux';
// // import BurgerConstructorItem from '../burger-constructor-item/Burger-Constructor-Item';
// import { selectBurgerIngredients, selectBurgerBun } from '../../services/selectors/burgerConstructorSelector';


// function Burger() {

//     // const ingredients = useSelector(selectBurgerIngredients);
//     const bun = useSelector(selectBurgerBun);

//     if (Object.keys(bun).length) {
//         return (
//             <div className={styles.burger_container}>

//                 <ConstructorElement
//                     type='top'
//                     isLocked={true}
//                     text={`${bun.name}(верх)`}
//                     price={bun.price}
//                     thumbnail={bun.image}
//                     extraClass={`${styles.bun} mr-4`} />

//                 {/* 
//                 <div>
//                     {ingredients.map((item, i) => {
//                         return <BurgerConstructorItem item={item} index={i} key={item._customId} />;
//                     })};

//                 </div> */}

//                 <ConstructorElement
//                     type='top'
//                     isLocked={true}
//                     text={`${bun.name}(верх)`}
//                     price={bun.price}
//                     thumbnail={bun.image}
//                     extraClass={`${styles.bun} mr-4`} />
//             </div>
//         );
//     };
// };


export default Burger;
