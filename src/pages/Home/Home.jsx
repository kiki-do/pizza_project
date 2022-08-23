import style from './Home.module.scss';
import Sort from '../../components/Sort/Sort';
import Card from '../../components/Card/Card';
import Products from '../../components/Products/Products';
import Skeleton from '../../components/Skeleton';
import { searchContext } from '../../App';
import React from 'react';
import axios from 'axios';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setPageCount } from '../../redux/slices/filterSlice';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { search } = React.useContext(searchContext);
  // const [currentPage, setCurrentPage] = React.useState(1);

  //Вытаскиваем из хранилища данные
  const { products, sort, pageCount } = useSelector((state) => state.filterSlice);
  const sortType = sort.sortProperty;
  const dispatch = useDispatch();

  const onClickProducts = (id) => {
    dispatch(setProducts(id));
  };

  const onClickPage = (number) => {
    dispatch(setPageCount(number));
  };

  React.useEffect(() => {
    const category = products > 0 ? `category=${products}` : '';
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sort = sortType.replace('-', '');
    setIsLoading(true);
    axios
      .get(
        `https://62e77c5193938a545bd2a755.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sort}&order=${order}`,
      )
      .then((responce) => {
        setItems(responce.data);
        setIsLoading(false);
      });

    // axios
    //   .get('https://62e77c5193938a545bd2a755.mockapi.io/cart')
    //   .then((responce) => setAddCart(responce.data));
  }, [products, sortType, pageCount]);

  /*Функция для суммирования цены в корзине*/

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
              .map((item, index) => <Card key={index} {...item} />)}
      </div>
      <Pagination onChangePage={onClickPage} />
    </div>
  );
};

export default Home;
