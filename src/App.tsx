import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { HomePage } from './pages/'

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
