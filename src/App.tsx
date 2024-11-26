import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import UserManagement from "./pages/UserManagement"
import RoleManagement from "./pages/RoleManagement"
import Navbar from "./components/Navbar"
import Login from "./Auth/Login"
import Toast from "./components/Toast"
import Register from "./Auth/Register"

const App = () => {
  const location = useLocation()

  // Hide Navbar
  const hideNavbarRoutes = ["/login", "/register"]
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname)

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <Toast />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/users' element={<UserManagement />} />
        <Route path='/roles' element={<RoleManagement />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
)

export default AppWrapper
