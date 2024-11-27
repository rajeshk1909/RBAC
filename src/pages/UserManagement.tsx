import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Plus, Filter } from "lucide-react"
import UserTable from "../components/UserTable"
import UserModal from "../components/UserModal"
import { RootState } from "../store"
import { addUser, updateUser, deleteUser } from "../store/slices/usersSlice"
import { User } from "../types"

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users.users)
  const roles = useSelector((state: RootState) => state.roles.roles)
  const [selectedUser, setSelectedUser] = useState<User | undefined>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isAdmin = useSelector((state: RootState) => state.auth.admin)

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
          <button
            className={`inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-lexend font-medium  focus:ring-blue-500 ${
              isAdmin
                ? "text-gray-700 bg-white hover:bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                : "cursor-not-allowed bg-gray-200 text-gray-500"
            } `}>
            <Filter className='h-4 w-4 mr-2' />
            Filter
          </button>
          <button
            onClick={() => {
              isAdmin && handleAddUser()
            }}
            className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium font-lexend  ${
              isAdmin
                ? "bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-blue-700 text-white"
                : "cursor-not-allowed bg-gray-200 text-gray-500"
            }
            `}>
            <Plus className='h-4 w-4 mr-2' />
            <span>Add User</span>
          </button>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow overflow-hidden'>
        <UserTable
          users={users}
          isAdmin={isAdmin}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
        />
      </div>

      {isAdmin && isModalOpen && (
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
