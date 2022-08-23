import logo from '../../img/logo.png';
import cart from '../../img/cart.png';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import Search from '../assets/Search/Search';
import { useSelector } from 'react-redux';

const Header = () => {
  const { totalPrice, items } = useSelector((state) => state.cartSlice);
  const totalCount = items.reduce((sum, item) => item.count + sum, 0);
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
      <Link to="/cart">
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
