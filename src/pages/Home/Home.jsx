import style from './Home.module.scss';
import Sort from '../../components/Sort/Sort';
import Card from '../../components/Card/Card';
import Products from '../../components/Products/Products';
import Skeleton from '../../components/Skeleton';
import { searchContext } from '../../App';
import React from 'react';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setPageCount } from '../../redux/slices/filterSlice';
import { fetchPizza } from '../../redux/slices/pizzaSlice';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { search } = React.useContext(searchContext);

  //Вытаскиваем из хранилища данные
  const { products, sort, pageCount } = useSelector((state) => state.filterSlice);
  const sortType = sort.sortProperty;
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.pizzaSlice);

  const onClickProducts = (id) => {
    dispatch(setProducts(id));
  };

  const onClickPage = (number) => {
    dispatch(setPageCount(number));
  };

  const getPizza = async () => {
    setIsLoading(true);
    const category = products > 0 ? `category=${products}` : '';
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sort = sortType.replace('-', '');
    dispatch(fetchPizza({ category, pageCount, order, sort }));
    setIsLoading(false);
  };

  React.useEffect(() => {
    getPizza();
  }, [products, sortType, pageCount]);

  return (
    <div className={style.home}>
      <Products value={products} onClickProducts={onClickProducts} />
      <Sort items={items} />
      <div className={style.home__text}>Все пиццы</div>
      <div className={style.forCard}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
              .map((item, index) => (
                <Link key={index} style={{ color: 'white' }} to={`/pizza_project/pizza/${item.id}`}>
                  <Card {...item} />
                </Link>
              ))}
      </div>
      <Pagination onChangePage={onClickPage} />
    </div>
  );
};

export default Home;
