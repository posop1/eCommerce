import { Link } from 'react-router-dom'
import homeImage from '../../../public/Header Banner.png'
import s from './HomePage.module.scss'

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={s.HomePage}>
      <div className={s.inner}>
        <div className="container">
          <div className={s.main}>
            <div className={s.main__info}>
              <h2>
                Welcome To Out <br /> <span>Hello eCommerce</span>{' '}
              </h2>
              <p>
                Hello Shop is the buying and selling of goods and services, or the transmitting of
                funds or data, over an electronic network, primarily the internet.
              </p>
              <div className={s.main__links}>
                <Link
                  to="/shop"
                  className={s.main__link}
                >
                  Shop
                </Link>
                <Link
                  to="/about"
                  className={s.main__link}
                >
                  About
                </Link>
              </div>
            </div>
            <img
              src={homeImage}
              alt="homeImage"
              className={s.main__info}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
