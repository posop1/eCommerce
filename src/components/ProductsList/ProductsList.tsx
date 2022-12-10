import { IProduct } from '../../types'
import { ProductItem } from '../ProductItem/ProductItem'
import s from './ProductsList.module.scss'

interface ProductListProps {
  products: IProduct[]
}

export const ProductsList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={s.ProductsList}>
      {products &&
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
    </div>
  )
}
