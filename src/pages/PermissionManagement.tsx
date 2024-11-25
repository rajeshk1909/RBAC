import React from "react"
import PermissionTable from "../components/PermissionTable"

const PermissionManagement: React.FC = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-6 uppercase font-montserrat'>
        Manage Permissions
      </h2>
      <PermissionTable />
    </div>
  )
}

export default PermissionManagement
