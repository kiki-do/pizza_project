import style from './Cart.module.scss';
import cart from '../../img/cart2.png';
import trash from '../../img/trash.png';
import emptyCart from '../../img/empty_cart.png';
import CartItem from '../../components/CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../../redux/slices/cartSlice';

export function Cart() {
  const items = useSelector((state) => state.cartSlice.items);
  const { totalPrice } = useSelector((state) => state.cartSlice);
  const totalCount = items.reduce((sum, item) => item.count + sum, 0);
  const dispatch = useDispatch();

  const onClickCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className={style.cart}>
      {items > 0 ? (
        <div>
          <div className={style.cart__head}>
            <div className={style.leftSide}>
              <img classname={style.cart__headImg} src={cart} alt="cart" />
              <div className={style.cart__headTitle}>Корзина</div>
            </div>
            <div onClick={onClickCart} className={style.rightSide}>
              <img classname={style.cart__trash} src={trash} alt="cart" />
              <div className={style.cart__trashTitle}>Очистить корзину</div>
            </div>
          </div>
          <div className={style.forLine}></div>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className={style.cart__footer}>
            <div className={style.cart__end}>
              <div className={style.cart__endCount}>
                Всего пицц: <b>{totalCount}шт.</b>
              </div>
              <div className={style.cart__endPrice}>
                Сумма заказа: <span>{totalPrice} ₽</span>
              </div>
            </div>
            <div className={style.cart__buttons}>
              <div className={style.cart__buttonsOne}>Вернуться назад</div>
              <div className={style.cart__buttonsTwo}>Оплатить сейчас</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.empty}>
          <div className={style.empty__title}>Корзина пустая 😕</div>
          <div className={style.empty__subtitle}>
            Вероятней всего, вы не заказывали ещё пиццу. <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </div>
          <img className={style.empty__img} src={emptyCart} alt="" />
        </div>
      )}
    </div>
  );
}
