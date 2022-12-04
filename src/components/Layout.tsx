import { Outlet } from 'react-router-dom'
import '../styles/app.scss'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="app">
      nav
      <div className="main">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
