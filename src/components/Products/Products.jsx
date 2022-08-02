import style from './Products.module.scss';
import Card from '../Card/Card';

const Products = ({ items, addToCart }) => {
  return (
    <div className={style.products}>
      <div className={style.line}></div>
      <div className={style.products__position}>
        <div className={style.products__all}>Все</div>
        <div className={style.products__all}>Мясные</div>
        <div className={style.products__all}>Вегетарианская</div>
        <div className={style.products__all}>Гриль</div>
        <div className={style.products__all}>Острые</div>
        <div className={style.products__all}>Закрытые</div>
        <div className={style.products__sort}>Сортировка по:</div>
      </div>
      <div className={style.products__text}>Все пиццы</div>
      <div className={style.forCard}>
        {items.map((item, index) => (
          <Card addToCart={(obj) => addToCart(obj)} key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
