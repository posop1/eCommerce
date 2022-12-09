import useActions from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import s from './CartPage.module.scss'

export const CartPage: React.FC = () => {
  const { removeItem } = useActions()
  const { cart } = useAppSelector((state) => state)

  return (
    <div className={s.CartPage}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.cart__list}>
            {cart.map((item) => (
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
            ))}
          </div>
          <div className={s.cart__info}>info</div>
        </div>
      </div>
    </div>
  )
}
