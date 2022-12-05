import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { HomePage } from './pages/'
import AboutPage from './pages/AboutPage/AboutPage'
import FaqPage from './pages/FaqPage/FaqPage'

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
            path="faq"
            element={<FaqPage />}
          />
          <Route
            path="about"
            element={<AboutPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
