import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart.tsx';
import Home from './pages/Home/Home.tsx';
import Header from './components/Header/Header.tsx';
import PizzaPage from './pages/PizzaPage/PizzaPage.tsx';


function App() {

  return (
    <div className="">
        <Header />
          <Routes>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/pizza_project" element={<Home />} />
            <Route path="/pizza_project/pizza/:id" element={<PizzaPage />} />
          </Routes>
      <header className=""></header>
    </div>
  );
}
export default App;
