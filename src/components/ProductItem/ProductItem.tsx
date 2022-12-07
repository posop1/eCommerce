import s from './ProductItem.module.scss'

export const ProductItem = () => {
  return (
    <div className={s.ProductItem}>
      <img
        src="https://www.tradeinn.com/f/13883/138838893/nike-air-zoom-pegasus-39-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg"
        alt=""
        className={s.image}
      />
      <div className={s.info}>
        <span className={s.name}>Name</span>
        <span className={s.price}>322</span>
      </div>
      <span className={s.category}>category</span>
      <button className={s.btn}>Buy</button>
    </div>
  )
}
