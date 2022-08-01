import logo from '../../../public/img/logo.png';
import cart from '../../../public/img/cart.png';

import style from './Header.module.scss';
const Header = () => {
  return (
    <div className={style.header}>
      <img src={logo} alt="logo" />
      <div className={style.header__logo}>
        <h2 className={style.header__title}>React Pizza</h2>
        <div className={style.header__subtitle}>самая вкусная пицца во вселенной</div>
      </div>
      <div className={style.cart}>
        <div className={style.cart__cost}>520 ₽</div>
        <div className={style.cart__count}>
          <img className={style.cartImg} src={cart} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Header;
