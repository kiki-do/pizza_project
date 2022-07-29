import style from './Products.module.scss';

const Products = () => {
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
    </div>
  );
};

export default Products;
