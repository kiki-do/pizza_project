import './App.scss';
import Header from './components/Header/Header';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import Home from './pages/Home/Home';

function App() {
  const [items, setItems] = React.useState([]);
  const [addCart, setAddCart] = React.useState([]);
  const [products, setProducts] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'raiting' });
  const [isLoading, setIsLoading] = React.useState(true);

  /*Делаю условия для сортировки и категорий с помощью категории, 
  чтобы на городить все внутри axios*/

  React.useEffect(() => {
    const category = products > 0 ? `category=${products}` : '';
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sort = sortType.sortProperty.replace('-', '');
    setIsLoading(true);
    axios
      .get(
        `https://62e77c5193938a545bd2a755.mockapi.io/items?${category}&sortBy=${sort}&order=${order}`,
      )
      .then((responce) => {
        setItems(responce.data);
        setIsLoading(false);
      });

    axios.get('https://62e77c5193938a545bd2a755.mockapi.io/items').then((responce) => {
      setItems(responce.data);
    });

    axios
      .get('https://62e77c5193938a545bd2a755.mockapi.io/cart')
      .then((responce) => setAddCart(responce.data));
  }, [products, sortType]);
  console.log(sortType);

  /*Функция для суммирования цены в корзине*/
  const cartPrice = addCart.reduce(function (sum, obj) {
    return obj.price + sum;
  }, 0);

  return (
    <div className="">
      <Header cartPrice={cartPrice} />
      {/* <Sort /> */}
      <Routes>
        <Route
          path="/home"
          exact
          element={
            <Home
              items={items}
              products={products}
              setProducts={setProducts}
              sortType={sortType}
              setSortType={setSortType}
              isLoading={isLoading}
            />
          }
        />
        <Route path="/cart" exact element={<Cart items={addCart} />}></Route>
      </Routes>

      <header className=""></header>
    </div>
  );
}
export default App;
