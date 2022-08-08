import style from './Card.module.scss';
import React from 'react';
const Card = ({ title, imageUrl, price, addToCart, productId, id, sizes }) => {
  const [add, setAdd] = React.useState(true);

  const onClickToAdd = () => {
    addToCart({ productId, id, imageUrl, title, price });
    setAdd(!add);
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
            <button className={style.card__button}>
              <img src="img/plus.svg" alt="+" />
              <div onClick={onClickToAdd} className="add">
                Добавить
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
