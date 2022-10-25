/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import * as routes from './constants/routes'
import Home from './pages/Home'
import Login from './pages/login'
import Signup from './pages/signup'
import Header from './pages/shared/Navbar'
import { useSelector } from 'react-redux'
import Group from './pages/group'
function App() {
  const user = useSelector(state => state.loginReducer)
  const RequireAuth = props => {
    return user.email ? props.children : <Navigate to='/login' />
  }
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path={routes.rootPath}
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route exact path={routes.loginPath} element={<Login />} />
          <Route exact path={routes.signUpPath} element={<Signup />} />
          <Route
            exact
            path={routes.addGroupPath}
            element={
              <RequireAuth>
                <Group />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
