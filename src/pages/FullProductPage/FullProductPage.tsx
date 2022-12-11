import { useParams } from 'react-router-dom'
import { useFetchProductByIdQuery } from '../../redux/product/productApi'
import s from './FullProductPage.module.scss'

export const FullProductPage: React.FC = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useFetchProductByIdQuery({ id })
  console.log(data)

  return (
    <div className={s.FullProductPage}>
      <div className="container">
        <div className={s.inner}></div>
      </div>
    </div>
  )
}
