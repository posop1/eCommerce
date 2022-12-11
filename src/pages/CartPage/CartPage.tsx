import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ProductItemInCart } from '../../components/ProductItemInCart/ProductItemInCart'
import { Button } from '../../components/UI/Button/Button'
import useActions from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import { calcTotalPrice } from '../../utils/calcTotalProce'
import s from './CartPage.module.scss'

export const CartPage: React.FC = () => {
  const { cart } = useAppSelector((state) => state)

  const totalPrice = calcTotalPrice(cart)

  return (
    <div className={s.CartPage}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.cart__list}>
            {cart.length > 0 ? (
              cart.map((item) => (
                <ProductItemInCart
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  category={item.category}
                  description={item.description}
                  rating={item.rating}
                  price={item.price}
                />
              ))
            ) : (
              <div className={s.empty}>
                <h3>Cart is Empty</h3>
              </div>
            )}
          </div>
          {cart.length > 0 && (
            <div className={s.cart__info}>
              <h3>Cart</h3>
              <div className={s.info__list}>
                {cart.map((item) => (
                  <div key={item.id}>
                    <p>{item.name}</p>
                    <span>{item.price}$</span>
                  </div>
                ))}
                <hr />
                <span className={s.total}>Total: {totalPrice}$</span>
              </div>
              <Link
                to="/u-can-not-buy"
                className={s.buy__btn}
              >
                Buy
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
