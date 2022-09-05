import style from './Home.module.scss';
import Sort from '../../components/Sort/Sort.tsx';
import Card from '../../components/Card/Card.tsx';
import Products from '../../components/Products/Products.tsx';
import Skeleton from '../../components/Skeleton.tsx';
import React from 'react';
import Pagination from '../../components/Pagination/Pagination.tsx';
import { useSelector } from 'react-redux';
import { setProducts, setPageCount, setSizes } from '../../redux/filter/slice.ts';
import { filterSort } from '../../redux/filter/selectors.ts';
import { selectPizza } from '../../redux/pizza/selectors.ts';
import { fetchPizza } from '../../redux/pizza/slice.ts';
import {useAppDispatch} from '../../redux/store.ts'
import { PizzaSliceState } from '../../redux/slices/pizzaSlice.ts';
import { FilterSliceState } from '../../redux/filter/types.ts';
import { filterSelectSearch } from '../../redux/filter/selectors.ts';


const Home = () => {

  //Вытаскиваем из хранилища данные
  const { products, sort, pageCount, size, searchValue } : FilterSliceState = useSelector(filterSort);
  const sortType = sort.sortProperty;
  const dispatch = useAppDispatch();
  const { items, status }: PizzaSliceState = useSelector(selectPizza);

  const onClickProducts = React.useCallback((id: number) => {
    dispatch(setProducts(id));
  }, [])


  const onClickPage = (number: number) => {
    dispatch(setPageCount(number));
  };


  const getPizza = async () => {
    const category = products > 0 ? `category=${products}` : '';
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sort = sortType.replace('-', '');
    const search = searchValue;
    dispatch(fetchPizza({ category, pageCount, order, sort, size, search }));
   
  };

  React.useEffect(() => {
    getPizza();

  }, [products, sortType, pageCount, searchValue]);

  const cardUI = items.filter((item: any) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item: any, index:number) => <Card {...item} key={index}/>)
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className={style.home}>
      <Products value={products} onClickProducts={onClickProducts} />
      <Sort items={items} value={sort} />
      <div className={style.home__text}>Все пиццы</div>
      <div className={style.forCard}>
        {status === 'loading' ? skeletons : cardUI}
      </div>
      <Pagination onChangePage={onClickPage} pageCount={pageCount} />
    </div>
  );
};

export default Home;

