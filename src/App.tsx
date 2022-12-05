import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { HomePage } from './pages/'
import AboutPage from './pages/AboutPage/AboutPage'
import FaqPage from './pages/FaqPage/FaqPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ShopPage from './pages/ShopPage/ShopPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="shop"
            element={<ShopPage />}
          />
          <Route
            path="faq"
            element={<FaqPage />}
          />
          <Route
            path="about"
            element={<AboutPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
