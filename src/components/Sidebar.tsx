import { Link, useLocation } from "react-router-dom"
import { Drawer } from "@mui/material"
import {
  Dashboard ,
  Group,
  Security,
  Logout,
} from "@mui/icons-material"


const menuItems = [
  { icon: Dashboard, label: "Dashboard", path: "/" },
  { icon: Group, label: "Manage Users", path: "/users" },
  { icon: Security, label: "Manage Roles", path: "/roles" },
]

interface SidebarProps {
  open: boolean
  toggleDrawer: () => void
  handleLogout:() => void
}

const Sidebar = ({ open, toggleDrawer, handleLogout }: SidebarProps) => {
  const location = useLocation()

  type sidebarItemsTypes = (typeof menuItems)[0]

  return (
    <div>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            borderRight: 0,
            backgroundColor: "#2C3E50",
            color: "#ECF0F1",
          },
        }}
        variant='temporary'
        anchor='left'
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          style: {
            transition: "all 0.3s ease-in-out",
          },
        }}>
        <div className='h-full bg-gray-900 text-white flex flex-col'>
          <div className='flex items-center justify-between p-4 lg:p-6'>
            <div>
              <h1 className='text-xl lg:text-2xl font-bold'>VRV Security</h1>
              <p className='text-sm text-gray-400'>RBAC Dashboard</p>
            </div>
          </div>

          <nav className='flex-1 px-2 py-4'>
            <ul className='space-y-1'>
              {menuItems.map((item: sidebarItemsTypes) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={toggleDrawer}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-800"
                      }`}>
                      <Icon className='h-5 w-5' />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className='p-4 border-t border-gray-800'>
            <button
              onClick={handleLogout}
              className='flex items-center space-x-3 text-gray-300 hover:text-white w-full px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors'>
              <Logout className='h-5 w-5' />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Sidebar
