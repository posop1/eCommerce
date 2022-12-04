import { Outlet } from 'react-router-dom'
import '../styles/app.scss'
import Navbar from './Navbar/Navbar'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
