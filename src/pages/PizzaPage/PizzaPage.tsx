import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import style from './PizzaPage.module.scss';

const PizzaPage = () => {
  const [pizza, setPizza] = React.useState<{imageUrl:string, title: string, price: number, size:number[]}>();
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
      <div className={style.pizza__blockRight}>
        <div className={style.pizza__blockTitle}><b>Название</b>: {pizza.title}</div>
        <div className={style.pizza__blockDescription}> <b>Описание</b>: Пи́цца (итал. Pizza) — традиционное итальянское блюдо в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и других продуктов.</div>
        <div className={style.pizza__blockPrice}><b>Цена</b>: {pizza.price} ₽</div>
      </div>
    </div>
  );
};

export default PizzaPage;
