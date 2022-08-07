// import logo from '../../../public/img/logo.png';
// import cart from '../../../public/img/cart.png';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';
const Header = ({ cartPrice }) => {
  return (
    <div className={style.header}>
      <Link to="/home">
        <img src="img/logo.png" alt="logo" />
      </Link>
      <div className={style.header__logo}>
        <h2 className={style.header__title}>React Pizza</h2>
        <div className={style.header__subtitle}>самая вкусная пицца во вселенной</div>
      </div>
      <Link to="/cart">
        <div className={style.cart}>
          <div className={style.cart__cost}>{cartPrice} ₽</div>
          <div className={style.cart__count}>
            <img className={style.cartImg} src="img/cart.png" alt="cart" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
