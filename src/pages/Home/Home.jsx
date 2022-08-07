import style from './Home.module.scss';
import Sort from '../../components/Sort/Sort';
import Card from '../../components/Card/Card';
import Products from '../../components/Products/Products';

const Home = ({ items, addToCart, products, setProducts, sortType, setSortType }) => {
  return (
    <div className={style.home}>
      <Products value={products} onClickProducts={(i) => setProducts(i)} />

      <Sort items={items} value={sortType} onChangeSort={(i) => setSortType(i)} />
      <div className={style.home__text}>Все пиццы</div>
      <div className={style.forCard}>
        {items.map((item, index) => (
          <Card addToCart={(obj) => addToCart(obj)} key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
