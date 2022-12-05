import { Outlet } from 'react-router-dom'
import '../styles/app.scss'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
