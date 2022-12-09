import { IProduct } from '../../types'
import s from './ProductItem.module.scss'

export const ProductItem: React.FC<IProduct> = ({ name, price, image, category, id }) => {
  return (
    <div className={s.ProductItem}>
      <img
        src={image}
        alt=""
        className={s.image}
      />
      <div className={s.info}>
        <span className={s.name}>{name}</span>
        <span className={s.price}>{price}$</span>
      </div>
      <span className={s.category}>{category}</span>
      <button className={s.btn}>Buy</button>
    </div>
  )
}
