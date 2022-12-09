import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { links } from '../../../utils/constans'
import s from './Navbar.module.scss'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { cart } = useAppSelector((state) => state)

  return (
    <div className={s.navbar}>
      <Link
        to="/"
        className={s.logo}
      >
        <span>e</span>Commerce
      </Link>
      <nav className={s.links}>
        {links.map((link) => (
          <Link
            to={link.to}
            className={s.link}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <Link
        to="/cart"
        className={s.cart__link}
      >
        <BsCart2
          size={25}
          className={s.cart__link}
        />
        {cart.length > 0 && <div className={s.cart__length}>{cart.length}</div>}
      </Link>
    </div>
  )
}

export default Navbar
