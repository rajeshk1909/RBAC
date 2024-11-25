import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import UserManagement from "./pages/UserManagement"
import RoleManagement from "./pages/RoleManagement"
import PermissionManagement from "./pages/PermissionManagement"
import Navbar from "./components/Navbar"

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className='lg:mx-[10%] mx-[3%]'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/users' element={<UserManagement />} />
          <Route path='/roles' element={<RoleManagement />} />
          <Route path='/permissions' element={<PermissionManagement />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
