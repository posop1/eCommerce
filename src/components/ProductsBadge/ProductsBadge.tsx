import { BsArrowRight } from 'react-icons/bs'
import { InfinitySpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { useFetchProductsQuery } from '../../redux/product/productApi'
import { ProductsList } from '../ProductsList/ProductsList'
import s from './ProductsBadge.module.scss'

interface ProductsBadgeProps {
  limit: number
}

export const ProductsBadge: React.FC<ProductsBadgeProps> = ({ limit }) => {
  const { data, isLoading, error } = useFetchProductsQuery({ limit })

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
          {isLoading ? (
            <div className={s.spinner}>
              <InfinitySpin
                width="200"
                color="#fff"
              />
            </div>
          ) : error ? (
            <div className={s.error}>ERROR</div>
          ) : (
            <ProductsList products={data} />
          )}
          <Link
            to="/shop"
            className={s.link}
          >
            <BsArrowRight size={50} />
          </Link>
        </div>
      </div>
    </div>
  )
}
