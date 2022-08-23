import React from 'react';
import style from './Products.module.scss';

const Products = ({ value, onClickProducts }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const checkCategory = (index) => {
    onClickProducts(index);
  };
  return (
    <div className={style.products}>
      <div className={style.line}></div>
      <div className={style.products__position}>
        <ul className={style.products__all}>
          {categories.map((item, index) => (
            <li
              key={index}
              onClick={() => checkCategory(index)}
              className={value === index ? style.active : style.default}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
