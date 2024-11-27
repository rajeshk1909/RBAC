import React, { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"
import Lottie from "lottie-react"
import menu_icon from "../assets/menu_icon.json"
import close_icon from "../assets/close_icon.json"
import { useDispatch } from "react-redux"
import { logout } from "@/store/slices/authSlice"

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useDispatch()

  const toggleDrawer = () => setOpen(!open)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className='custom-shadow sticky top-0 z-10 bg-[#ededf0] mb-10'>
      <div className='flex justify-between items-center lg:px-[10%] px-[5%] py-5'>
        <Link
          to='/'
          className='flex items-center justify-center font-montserrat font-bold text-xl'>
          RBAC
        </Link>

        <div className='hidden md:flex space-x-4 font-lexend font-semibold'>
          <Link
            to='/'
            className='custom-gradient-text lg:text-base text-sm poppins-700 text-[17px] px-2 py-2 border-bottom-gradient'>
            Dashboard
          </Link>
          <Link
            to='/users'
            className='custom-gradient-text lg:text-base text-sm poppins-700 text-[17px] px-2 py-2 border-bottom-gradient'>
            Manage Users
          </Link>
          <Link
            to='/roles'
            className='custom-gradient-text lg:text-base text-sm poppins-700 text-[17px] px-2 py-2 border-bottom-gradient'>
            Manage Roles
          </Link>
          <Link
            to='/login'
            className='custom-gradient-text lg:text-base text-sm poppins-700 text-[17px] px-2 py-2 border-bottom-gradient'
            onClick={() => handleLogout()}>
            Logout
          </Link>
        </div>
        {/* Mobile view */}
        <div className='md:hidden block'>
          <p onClick={() => toggleDrawer()}>
            <Lottie
              animationData={open ? close_icon : menu_icon}
              className={` ${open ? "h-5 w-6" : "h-10 w-16"}md:h-12 md:w-20`}
            />
          </p>
          <Sidebar
            open={open}
            toggleDrawer={toggleDrawer}
            handleLogout={handleLogout}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
