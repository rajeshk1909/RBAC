import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Plus, Filter } from "lucide-react"
import RoleTable from "../components/RoleTable"
import RoleModal from "../components/modals/RoleModal"
import { RootState } from "../store"
import { addRole, updateRole, deleteRole } from "../store/slices/rolesSlice"
import { Role } from "../types"
import { mockPermissions } from "../data/mockData"

export default function Roles() {
  const dispatch = useDispatch()
  const roles = useSelector((state: RootState) => state.roles.roles)
  const [selectedRole, setSelectedRole] = useState<Role | undefined>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddRole = () => {
    setSelectedRole(undefined)
    setIsModalOpen(true)
  }

  const handleEditRole = (role: Role) => {
    setSelectedRole(role)
    setIsModalOpen(true)
  }

  const handleDeleteRole = (roleId: string) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      dispatch(deleteRole(roleId))
    }
  }

  const handleSubmit = (data: Partial<Role>) => {
    if (selectedRole) {
      dispatch(updateRole({ ...selectedRole, ...data }))
    } else {
      dispatch(
        addRole({
          id: Date.now().toString(),
          ...data,
        } as Role)
      )
    }
    setIsModalOpen(false)
  }

  return (
    <div className='p-4 md:p-6 space-y-6'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>Roles</h1>
          <p className='text-gray-500'>Manage roles and their permissions</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-3'>
          <button className='inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            <Filter className='h-4 w-4 mr-2' />
            Filter
          </button>
          <button
            onClick={handleAddRole}
            className='inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            <Plus className='h-4 w-4 mr-2' />
            Add Role
          </button>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow overflow-hidden'>
        <RoleTable
          roles={roles}
          onEdit={handleEditRole}
          onDelete={handleDeleteRole}
        />
      </div>

      {isModalOpen && (
        <RoleModal
          role={selectedRole}
          permissions={mockPermissions}
          onSubmit={handleSubmit}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

// import React from "react"
// import RoleTable from "../components/RoleTable"

// const RoleManagement: React.FC = () => {
//   return (
//     <div className='lg:mx-[10%] mx-[3%]'>
//       <h2 className='text-2xl font-bold mb-6 uppercase font-montserrat'>
//         Manage Roles
//       </h2>
//       <RoleTable />
//     </div>
//   )
// }

// export default RoleManagement
