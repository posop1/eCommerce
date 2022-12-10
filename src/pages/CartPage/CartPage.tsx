import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import useActions from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import { calcTotalPrice } from '../../utils/calcTotalProce'
import s from './CartPage.module.scss'

export const CartPage: React.FC = () => {
  const { removeItem } = useActions()
  const { cart } = useAppSelector((state) => state)

  const totalPrice = calcTotalPrice(cart)

  return (
    <div className={s.CartPage}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.cart__list}>
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className={s.cart__item}
                >
                  <div className={s.cart__item__info}>
                    <img
                      src={item.image}
                      alt="cart image"
                      className={s.image}
                    />
                    <div>
                      <h3>{item.name}</h3>
                      <span>{item.category}</span>
                      <p>{item.description}</p>
                      <p className={s.rating}>
                        <AiFillStar size={20} />
                        {item.rating}
                      </p>
                      <button
                        className={s.btn}
                        onClick={() => removeItem({ id: item.id })}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <span className={s.info__price}>{item.price}$</span>
                </div>
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
