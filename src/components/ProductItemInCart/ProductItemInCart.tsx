import { AiFillStar } from 'react-icons/ai'
import useActions from '../../hooks/useActions'
import { IProduct } from '../../types'
import { Button } from '../UI/'
import s from './ProductItemInCart.module.scss'

export const ProductItemInCart: React.FC<IProduct> = ({
  id,
  image,
  name,
  category,
  description,
  rating,
  price
}) => {
  const { removeItem } = useActions()

  return (
    <div className={s.cart__item}>
      <div className={s.cart__item__info}>
        <img
          src={image}
          alt="cart image"
          className={s.image}
        />
        <div>
          <h3>{name}</h3>
          <span>{category}</span>
          <p>{description}</p>
          <p className={s.rating}>
            <AiFillStar size={20} />
            {rating}
          </p>
          <Button onClick={() => removeItem({ id: id })}>Remove</Button>
        </div>
      </div>
      <span className={s.info__price}>{price}$</span>
    </div>
  )
}
