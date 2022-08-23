import React from 'react';
import style from './CartItem.module.scss';
import remove from '../../img/remove.svg';

import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';

const CartItem = ({ id, title, price, count, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm('Are you sure to remove that?')) dispatch(removeItem(id));
  };

  return (
    <div>
      <div className={style.card}>
        <div>
          <img className={style.card__img} src={imageUrl} alt="cart" />
        </div>
        <div className={style.card__title}>
          <b>{title}</b>
        </div>
        <div className={style.card__quantity}>
          <b>
            <span onClick={onClickMinus} className={style.minus}>
              -
            </span>
            {count}
            <span onClick={onClickPlus} className={style.plus}>
              +
            </span>
          </b>
        </div>
        <div className={style.card_price}>
          <b>{price} ₽</b>
        </div>
        <div className={style.card__remove}>
          <img onClick={onClickRemove} src={remove} alt="remove" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
