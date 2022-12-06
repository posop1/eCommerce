import { Provider } from 'react-redux'
import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { store } from './redux/store'
import { routes } from './utils/constans'

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
