import React from 'react';
import logo from '../../img/logo.png';
import cart from '../../img/cart.png';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import Search from '../Search/Search.tsx';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/cart/selectors.ts';
import { CartSliceState } from '../../redux/cart/slice.ts';

const Header = () => {

  const isMounted = React.useRef(false);  
  const { totalPrice, items } : CartSliceState = useSelector(selectCart);
  const totalCount = items.reduce((sum: number, item: any) => item.count + sum, 0);


  React.useEffect(() => {
    if(isMounted.current){
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json)
    }
    isMounted.current = true;
  }, [items])

  return (
    <div className={style.header}>
      <Link to="/pizza_project">
        <img src={logo} alt="logo" />
      </Link>
      <div className={style.header__logo}>
        <h2 className={style.header__title}>React Pizza</h2>
        <div className={style.header__subtitle}>самая вкусная пицца во вселенной</div>
      </div>
      <Search />
      <Link  style={{ color: 'white', textDecoration: 'none' }} to="/cart" >
        <div className={style.cart}>
          <div className={style.cart__cost}>{totalPrice} ₽</div>
          <div className={style.cart__count}>
            <img className={style.cartImg} src={cart} alt="cart" />
            {totalCount}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
