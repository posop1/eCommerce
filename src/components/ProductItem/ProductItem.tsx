import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import useActions from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import { IProduct } from '../../types'
import { Button } from '../UI/'
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
      <Link to={`/products/${product.id}`}>
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
      <div className={s.rat__btn}>
        <span>
          <AiFillStar size={20} />
          {product.rating}
        </span>
        <Button
          onClick={() => (isExistsInCart ? removeItem({ id: product.id }) : addItem(product))}
        >
          {isExistsInCart ? (
            <span>
              <AiOutlineMinus size={18} />
              Remove
            </span>
          ) : (
            <span>
              <AiOutlinePlus size={18} />
              Add
            </span>
          )}
        </Button>
      </div>
    </div>
  )
}
