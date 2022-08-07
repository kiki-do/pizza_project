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
  const [sortType, setSortType] = React.useState(0);
  // const addToCart = (obj) => {
  //   const findItem = addCart.find((item) => addCart.productId === item.productId);
  //   if (findItem) {
  //     axios
  //       .post(`https://62e77c5193938a545bd2a755.mockapi.io/cart/${obj.id}`, obj)
  //       .then((responce) => setAddCart(responce.data));
  //     console.log(obj.id);
  //     console.log(setAddCart);
  //   }
  // };

  // const removeCart = (obj) => {
  //   if (addCart.find((item) => item.id === obj.id)) {
  //     setAddCart((prev) => prev.filter((item) => item.productId !== obj.productId));
  //     axios
  //       .delete(`https://62e77c5193938a545bd2a755.mockapi.io/cart/${obj.id}`)
  //       .then((responce) => setAddCart(responce.data));
  //   }

  // };

  const cartPrice = addCart.reduce(function (sum, obj) {
    return obj.price + sum;
  }, 0);

  React.useEffect(() => {
    if (products > 0) {
      axios
        .get('https://62e77c5193938a545bd2a755.mockapi.io/items?category=' + products)
        .then((responce) => setItems(responce.data));
    } else {
      axios
        .get('https://62e77c5193938a545bd2a755.mockapi.io/items')
        .then((responce) => setItems(responce.data));
    }
    axios
      .get('https://62e77c5193938a545bd2a755.mockapi.io/cart')
      .then((responce) => setAddCart(responce.data));
    if (sortType === 'title') {
      axios
        .get(`https://62e77c5193938a545bd2a755.mockapi.io/items?sortBy=${sortType}&order=asc`)
        .then((responce) => setItems(responce.data));
    } else {
      axios
        .get(`https://62e77c5193938a545bd2a755.mockapi.io/items?sortBy=${sortType}&order=desc`)
        .then((responce) => setItems(responce.data));
    }
  }, [products, sortType]);
  console.log(sortType);

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
