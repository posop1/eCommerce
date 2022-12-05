import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { routes } from './utils/constans'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          {routes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
