import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { links } from '../../../utils/constans'
import s from './Navbar.module.scss'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
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
      <Link to="/cart">
        <BsCart2
          size={25}
          className={s.cart__link}
        />
      </Link>
    </div>
  )
}

export default Navbar
