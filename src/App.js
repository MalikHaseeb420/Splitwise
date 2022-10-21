import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as routes from './constants/routes'
import Home from './pages/Home'
import Login from './pages/Login/Login'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path={routes.rootPath} element={<Home />} />
          <Route exact path={routes.loginPath} element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
