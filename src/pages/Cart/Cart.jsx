import style from './Cart.module.scss';
import cart from '../../img/cart2.png';
import trash from '../../img/trash.png';
import remove from '../../img/remove.svg';

export function Cart({ items = [], onRemove }) {
  return (
    <div className={style.cart}>
      <div className={style.cart__head}>
        <div className={style.leftSide}>
          <img classname={style.cart__headImg} src={cart} alt="cart" />
          <div className={style.cart__headTitle}>Корзина</div>
        </div>
        <div className={style.rightSide}>
          <img classname={style.cart__trash} src={trash} alt="cart" />
          <div className={style.cart__trashTitle}>Очистить корзину</div>
        </div>
      </div>
      <div className={style.forLine}></div>
      {items.length > 0 ? (
        <div>
          {items.map((obj) => (
            <div className={style.cart__card}>
              <div className={style.cart__cardImg}>
                <img src={obj.imageUrl} alt="cart" />
              </div>
              <div className={style.cart__cardTitle}>{obj.title}</div>
              <div className={style.cart__cardQuantity}>1</div>
              <div className={style.cart__cardPrice}> {obj.price} ₽ </div>
              <div className={style.cart__cardRemove}>
                <img onClick={() => onRemove(obj.productId)} src={remove} alt="remove" />
              </div>
            </div>
          ))}{' '}
        </div>
      ) : (
        <div>
          <div>Корзина пустая 😕</div>
        </div>
      )}
    </div>
  );
}
