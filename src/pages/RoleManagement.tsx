import React from "react"
import RoleTable from "../components/RoleTable"

const RoleManagement: React.FC = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-6 uppercase font-montserrat'>
        Manage Roles
      </h2>
      <RoleTable />
    </div>
  )
}

export default RoleManagement
