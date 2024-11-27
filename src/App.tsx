import { Route, Routes, useLocation } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import UserManagement from "./pages/UserManagement"
import RoleManagement from "./pages/RoleManagement"
import Navbar from "./components/Navbar"
import Toast from "./components/Toast"
import PrivateRoute from "./components/PrivateRoute"
import Login from "./Auth/Login"
import Register from "./Auth/Register"

const App = () => {
  const location = useLocation()

  // Hide Navbar for specific routes
  const hideNavbarRoutes = ["/login", "/register"]
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname)

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <Toast />
      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Protected Routes */}
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path='/users'
          element={
            <PrivateRoute>
              <UserManagement />
            </PrivateRoute>
          }
        />
        <Route
          path='/roles'
          element={
            <PrivateRoute>
              <RoleManagement />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
