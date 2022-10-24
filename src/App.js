import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as routes from './constants/routes'
import Home from './pages/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup'
import Header from './pages/shared/Navbar'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path={routes.rootPath} element={<Home />} />
          <Route exact path={routes.loginPath} element={<Login />} />
          <Route exact path={routes.signUpPath} element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
