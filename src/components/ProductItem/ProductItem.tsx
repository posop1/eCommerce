import { Link } from 'react-router-dom'
import useActions from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import { IProduct } from '../../types'
import s from './ProductItem.module.scss'

interface ProductItemProps {
  product: IProduct
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { addItem } = useActions()
  const { removeItem } = useActions()
  const { cart } = useAppSelector((state) => state)

  const isExistsInCart = cart.some((i) => i.id === product.id)

  return (
    <div className={s.ProductItem}>
      <Link to="/shop">
        <img
          src={product.image}
          alt=""
          className={s.image}
        />
      </Link>

      <div className={s.info}>
        <span className={s.name}>{product.name}</span>
        <span className={s.price}>{product.price}$</span>
      </div>
      <span className={s.category}>{product.category}</span>
      <button
        className={s.btn}
        onClick={() => (isExistsInCart ? removeItem({ id: product.id }) : addItem(product))}
      >
        {isExistsInCart ? 'Remove in Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}
