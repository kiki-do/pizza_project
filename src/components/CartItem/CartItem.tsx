import React from 'react';
import style from './CartItem.module.scss';
import remove from '../../img/remove.svg';

import { useDispatch} from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/cart/slice.ts';


type CartItemProps ={ 
  id: string;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
  size: number[];
  type: number[]
}
 


const CartItem: React.FC<CartItemProps> = ({ id, title, price, count, imageUrl, size, type}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };
 
  return (

    
    <div>
      <div className={style.card}>
        <div>
          <img className={style.card__img} src={imageUrl} alt="cart" />
        </div>
        <div className={style.card__title}>
          <b>{title}</b>
          <p>{size} см, {Number(type) == 1 ? 'традиционное' : 'тонкое'}</p>
        </div>
        <div className={style.card__quantity}>
          <b>
            {count > 1 ? (
              <span onClick={onClickMinus} className={style.minus}>
                -
              </span>
            ) : (
              <span className={style.minusDis} disabled={true}>
                -
              </span>
            )}
            {count}
            <span onClick={onClickPlus} className={style.plus}>
              +
            </span>
          </b>
        </div>
        <div className={style.card_price}>
          <b>{price * count} ₽</b>
        </div>
        <div className={style.card__remove}>
          <img onClick={onClickRemove} src={remove} alt="remove" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
