import React from "react"
import UserTable from "../components/UserTable"

const UserManagement: React.FC = () => {
  return (
    <div className='lg:mx-[10%] mx-[3%]'>
      <h2 className='text-2xl font-bold mb-6 uppercase font-montserrat'>
        Manage Users
      </h2>
      <UserTable />
    </div>
  )
}

export default UserManagement
