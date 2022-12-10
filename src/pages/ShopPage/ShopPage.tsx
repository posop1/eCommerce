import { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { InfinitySpin } from 'react-loader-spinner'
import { ProductsList } from '../../components/ProductsList/ProductsList'
import { useFetchProductsQuery } from '../../redux/product/productApi'
import s from './ShopPage.module.scss'

interface ShopPageProps {}

export const ShopPage: React.FC<ShopPageProps> = () => {
  const [page, setPage] = useState(1)
  const { data = [], isLoading, error } = useFetchProductsQuery({ page })

  const incrementPage = () => {
    setPage((prev) => prev + 1)
  }
  const decrementPage = () => {
    if (page === 1) {
      return
    }
    setPage((prev) => prev - 1)
  }

  return (
    <div className={s.ShopPage}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.params}></div>
        </div>
        <div className={s.products}>
          {isLoading ? (
            <div className={s.spinner}>
              <InfinitySpin
                width="200"
                color="#080808"
              />
            </div>
          ) : error ? (
            <div className={s.error}>ERROR</div>
          ) : (
            <ProductsList products={data} />
          )}
        </div>
      </div>
      <div className={s.pagination}>
        <button onClick={decrementPage}>
          <AiOutlineLeft size={20} />
        </button>
        <span>{page}</span>
        <button onClick={incrementPage}>
          <AiOutlineRight size={20} />
        </button>
      </div>
    </div>
  )
}
