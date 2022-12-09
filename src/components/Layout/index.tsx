import { Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import '../../styles/app.scss'
import { GoToCart } from '../GoToCart/GoToCart'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  const { cart } = useAppSelector((state) => state)
  const location = useLocation()

  return (
    <div className="app">
      <Navbar />
      {cart.length > 0 && location.pathname !== '/cart' && <GoToCart />}
      <div className="main">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export { Layout }
