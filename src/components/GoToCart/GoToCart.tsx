import { Link } from 'react-router-dom'
import s from './GoToCart.module.scss'

export const GoToCart = () => {
  return (
    <div className={s.GoToCart}>
      <Link
        to="/cart"
        className={s.goToCart__link}
      >
        Go To Cart
      </Link>
    </div>
  )
}
