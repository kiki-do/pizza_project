import style from './Home.module.scss';
import Sort from '../../components/Sort/Sort.tsx';
import Card from '../../components/Card/Card.tsx';
import Products from '../../components/Products/Products.tsx';
import Skeleton from '../../components/Skeleton.tsx';
import React from 'react';
import Pagination from '../../components/Pagination/Pagination.tsx';
import { searchContext } from '../../App.tsx';
import { useSelector } from 'react-redux';
import { setProducts, setPageCount, setSizes } from '../../redux/filter/slice.ts';
import { filterSort } from '../../redux/filter/selectors.ts';
import { selectPizza } from '../../redux/pizza/selectors.ts';
import { fetchPizza } from '../../redux/pizza/slice.ts';
import {useAppDispatch} from '../../redux/store.ts'
import { PizzaSliceState } from '../../redux/slices/pizzaSlice.ts';
import { FilterSliceState } from '../../redux/filter/types.ts';


const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { search } = React.useContext(searchContext);

  //Вытаскиваем из хранилища данные
  const { products, sort, pageCount, size } : FilterSliceState = useSelector(filterSort);
  const sortType = sort.sortProperty;
  const dispatch = useAppDispatch();
  const { items }: PizzaSliceState = useSelector(selectPizza);

  const onClickProducts = React.useCallback((id: number) => {
    dispatch(setProducts(id));
  }, [])

  const onClickSizes = React.useCallback((id: number) => {
    dispatch(setSizes(id));
  }, [])

  const onClickPage = (number: number) => {
    dispatch(setPageCount(number));
  };

  console.log(items)

  type pizzaList = { 
    category: string;
    pageCount: number;
    order: string;
    sort: string;
  }


  const getPizza = async () => {
    setIsLoading(true);
    const category = products > 0 ? `category=${products}` : '';
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sort = sortType.replace('-', '');
    dispatch(fetchPizza({ category, pageCount, order, sort, size }));
    setIsLoading(false);
   
  };

  React.useEffect(() => {
    getPizza();

  }, [products, sortType, pageCount]);

  return (
    <div className={style.home}>
      <Products value={products} onClickProducts={onClickProducts} />
      <Sort items={items} value={sort} />
      <div className={style.home__text}>Все пиццы</div>
      <div className={style.forCard}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
              .map((item, index:number) => <Card {...item} key={index} onClickSizes={onClickSizes} size={size}/>)}
      </div>
      <Pagination onChangePage={onClickPage} pageCount={pageCount} />
    </div>
  );
};

export default Home;

