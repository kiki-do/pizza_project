import style from './Home.module.scss';
import Sort from '../../components/Sort/Sort';
import Card from '../../components/Card/Card';
import Products from '../../components/Products/Products';
import Skeleton from '../../components/Skeleton';

const Home = ({ items, addToCart, products, setProducts, sortType, setSortType, isLoading }) => {
  return (
    <div className={style.home}>
      <Products value={products} onClickProducts={(i) => setProducts(i)} />

      <Sort items={items} value={sortType} onChangeSort={(i) => setSortType(i)} />
      <div className={style.home__text}>Все пиццы</div>
      <div className={style.forCard}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item, index) => (
              <Card addToCart={(obj) => addToCart(obj)} key={index} {...item} />
            ))}
      </div>
    </div>
  );
};

export default Home;
