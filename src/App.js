import './App.scss';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import React from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://62e77c5193938a545bd2a755.mockapi.io/items')
      .then((responce) => setItems(responce.data));
  }, []);

  return (
    <div className="">
      <Header />
      <Products />
      <div className="forCard">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <header className=""></header>
    </div>
  );
}
export default App;
