import { Link } from 'react-router-dom'
import { ProductItem } from '../ProductItem/ProductItem'
import s from './ProductsBadge.module.scss'

interface ProductsBadgeProps {
  limit: number
}

export const ProductsBadge: React.FC<ProductsBadgeProps> = ({ limit }) => {
  return (
    <div className={s.ProductsBadge}>
      <div className="container">
        <div className={s.inner}>
          <Link
            to="/shop"
            className={s.link}
          >
            <h3>Products</h3>
          </Link>
          <div className={s.list}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  )
}
