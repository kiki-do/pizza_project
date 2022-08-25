import style from './Card.module.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
const Card = ({ title, imageUrl, price, addToCart, productId, id, sizes }) => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cartSlice);

  const cartItem = useSelector((state) => state.cartSlice.items.find((obj) => obj.id === id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickToAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      sizes,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={style.card}>
      <div className={style.card__pizza}>
        <img className={style.card__pizzaSize} src={imageUrl} alt="pizza" />
        <div className={style.card__description}>
          <div className={style.card__title}>{title}</div>
          <div className={style.card__board}>
            <div className={style.card__dough}>
              <div className={style.card__doughThick}>тонкое</div>
              <div className={style.card__doughTraditional}>традиционное</div>
            </div>
            <div className={style.card__size}>
              {sizes[0] ? <div className={style.card__sizeLow}>{sizes[0]}см</div> : 'нет'}
              {sizes[1] ? <div className={style.card__sizeLow}>{sizes[1]}см</div> : 'нет'}
              {sizes[2] ? <div className={style.card__sizeLow}>{sizes[2]}см</div> : 'нет'}
            </div>
          </div>
          <div className={style.card__forRow}>
            <div className={style.card__price}>от {price} ₽ </div>
            <button onClick={onClickToAdd} className={style.card__button}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="#EB5A1E"
                />
              </svg>
              <div className="add">
                Добавить
                {addedCount > 0 && <span> {addedCount}</span>}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
