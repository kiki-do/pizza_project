import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import PizzaPage from './pages/PizzaPage/PizzaPage';

export const searchContext = React.createContext();

function App() {
  const [search, setSearch] = React.useState('');

  return (
    <div className="">
      {/* <Sort /> */}
      <searchContext.Provider value={{ search, setSearch }}>
        <Header />
        <Routes>
          <Route path="/cart" exact element={<Cart />}></Route>
          <Route path="/pizza_project" element={<Home />} />
          <Route path="/pizza_project/pizza/:id" element={<PizzaPage />} />
        </Routes>
      </searchContext.Provider>
      <header className=""></header>
    </div>
  );
}
export default App;
