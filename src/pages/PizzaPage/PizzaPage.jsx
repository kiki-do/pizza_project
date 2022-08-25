import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import style from './PizzaPage.module.scss';

const PizzaPage = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const fetchPizza = async () => {
    try {
      const { data } = await axios.get('https://62e77c5193938a545bd2a755.mockapi.io/items/' + id);
      setPizza(data);
    } catch (error) {
      alert('Ошибка в рендере пицц( ');
    }
  };

  React.useEffect(() => {
    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Загрузка...';
  }
  return (
    <div className={style.pizza__block}>
      <div className={style.pizza__blockImg}>
        <img src={pizza.imageUrl} alt="" />
      </div>
      <div className={style.pizza__blockTitle}>{pizza.title}</div>
      <div className={style.pizza__blockPrice}>{pizza.price} </div>
    </div>
  );
};

export default PizzaPage;
