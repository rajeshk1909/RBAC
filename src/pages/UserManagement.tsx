import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Plus, Filter } from "lucide-react"
import UserTable from "../components/UserTable"
import UserModal from "../components/modals/UserModal"
import { RootState } from "../store"
import { addUser, updateUser, deleteUser } from "../store/slices/usersSlice"
import { User } from "../types"

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users.users)
  const roles = useSelector((state: RootState) => state.roles.roles)
  const [selectedUser, setSelectedUser] = useState<User | undefined>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddUser = () => {
    setSelectedUser(undefined)
    setIsModalOpen(true)
  }

  const handleEditUser = (user: User) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  const handleDeleteUser = (userId: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId))
    }
  }

  const handleSubmit = (data: Partial<User>) => {
    if (selectedUser) {
      dispatch(updateUser({ ...selectedUser, ...data }))
    } else {
      dispatch(
        addUser({
          id: Date.now().toString(),
          lastLogin: new Date().toISOString(),
          ...data,
        } as User)
      )
    }
    setIsModalOpen(false)
  }

  return (
    <div className='p-4 md:p-6 space-y-6'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>Users</h1>
          <p className='text-gray-500'>Manage user access and permissions</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-3'>
          <button className='inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            <Filter className='h-4 w-4 mr-2' />
            Filter
          </button>
          <button
            onClick={handleAddUser}
            className='inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            <Plus className='h-4 w-4 mr-2' />
            Add User
          </button>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow overflow-hidden'>
        <UserTable
          users={users}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
        />
      </div>

      {isModalOpen && (
        <UserModal
          user={selectedUser}
          roles={roles.map((role) => role.name)}
          onSubmit={handleSubmit}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}
