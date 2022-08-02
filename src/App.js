import './App.scss';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart/Cart';

function App() {
  const [items, setItems] = React.useState([]);
  const [addCart, setAddCart] = React.useState([]);

  const addToCart = (obj) => {
    axios
      .post(`https://62e77c5193938a545bd2a755.mockapi.io/cart/${obj.id}`)
      .then((responce) => setAddCart(responce.data));
  };

  const removeCart = (id) => {
    axios.delete(`https://62e77c5193938a545bd2a755.mockapi.io/cart/${id}`);
    setAddCart((prev) => prev.filter((item) => item.productId !== id));
  };

  React.useEffect(() => {
    axios
      .get('https://62e77c5193938a545bd2a755.mockapi.io/items')
      .then((responce) => setItems(responce.data));

    axios
      .get('https://62e77c5193938a545bd2a755.mockapi.io/cart')
      .then((responce) => setAddCart(responce.data));
  }, []);

  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" exact element={<Products items={items} addToCart={addToCart} />} />
        <Route path="/cart" exact element={<Cart items={addCart} onRemove={removeCart} />}></Route>
      </Routes>

      <header className=""></header>
    </div>
  );
}
export default App;
