import React from 'react';
import style from './Cart.module.scss';
import cart from '../../img/cart2.png';
import trash from '../../img/trash.png';
import emptyCart from '../../img/empty_cart.png';
import CartItem from '../../components/CartItem/CartItem.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, selectCartSec } from '../../redux/cart/selectors.ts';
import { clearItems, CartSliceState } from '../../redux/cart/slice.ts';
import { Link } from 'react-router-dom';

export function Cart() {
  const items : CartSliceState[]  = useSelector(selectCartSec);
  const { totalPrice } : CartSliceState = useSelector(selectCart);
  const totalCount = items.reduce((sum: number, item: any) => item.count + sum, 0);
  const dispatch = useDispatch();

  const onClickCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className={style.cart}>
      {items.length > 0 ? (
        <div>
          <div className={style.cart__head}>
            <div className={style.leftSide}>
              <img className={style.cart__headImg} src={cart} alt="cart" />
              <div className={style.cart__headTitle}>Корзина</div>
            </div>
            <div onClick={onClickCart} className={style.rightSide}>
              <img className={style.cart__trash} src={trash} alt="cart" />
              <div className={style.cart__trashTitle}>Очистить корзину</div>
            </div>
          </div>
          <div className={style.forLine}></div>
          {items.map((item: any ) => (
            <CartItem key={item.id} {...item} totalPrice={totalPrice}/>
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
              <Link to="/pizza_project" style={{color: 'white', textDecoration: 'none'}}>
                <div className={style.cart__buttonsOne}>Вернуться назад</div>
              </Link>
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
          <Link to="/pizza_project" style={{color: 'white', textDecoration: 'none'}}>
            <div className={style.cart__buttonsThree}>Вернуться назад</div>
          </Link>
        </div>
      )}
    </div>
  );
}
