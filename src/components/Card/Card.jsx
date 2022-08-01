import style from './Card.module.scss';
const Card = ({ title, imageUrl, price, id }) => {
  return (
    <div className={style.card}>
      <div className={style.card__pizza}>
        <img src={imageUrl} alt="pizza" />
        <div className={style.card__description}>
          <div className={style.card__title}>{title}</div>
          <div className={style.card__board}>
            <div className={style.card__dough}>
              <div className={style.card__doughThick}>тонкое</div>
              <div className={style.card__doughTraditional}>традиционное</div>
            </div>
            <div className={style.card__size}>
              <div className={style.card__sizeLow}>26см</div>
              <div className={style.card__sizeMed}>30см</div>
              <div className={style.card__sizeHigh}>40см</div>
            </div>
          </div>
          <div className={style.card__forRow}>
            <div className={style.card__price}>от {price} ₽ </div>
            <button className={style.card__button}>
              <img src={plus} alt="" />
              <div className="add">Добавить</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
