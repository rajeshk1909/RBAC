import { User } from "../types"
import { Edit2, Trash2, MoreVertical } from "lucide-react"

interface UserTableProps {
  isAdmin: boolean
  users: User[]
  onEdit: (user: User) => void
  onDelete: (userId: string) => void
}

const  UserTable = ({
  users,
  onEdit,
  onDelete,
  isAdmin,
}: UserTableProps) => {
  return (
    <div className='bg-white rounded-lg shadow overflow-hidden'>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                User
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Role
              </th>
              <th className='hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Status
              </th>
              <th className='hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Last Login
              </th>
              <th className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {users.map((user) => (
              <tr key={user.id} className='hover:bg-gray-50'>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0 h-10 w-10'>
                      <img
                        className='h-10 w-10 rounded-full'
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user.name
                        )}&background=random`}
                        alt=''
                      />
                    </div>
                    <div className='ml-4'>
                      <div className='text-sm font-medium text-gray-900'>
                        {user.name}
                      </div>
                      <div className='text-sm text-gray-500'>{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800'>
                    {user.role}
                  </span>
                </td>
                <td className='hidden sm:table-cell px-6 py-4 whitespace-nowrap'>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                    {user.status}
                  </span>
                </td>
                <td className='hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  {new Date(user.lastLogin).toLocaleString()}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                  <div className='flex items-center justify-end space-x-2'>
                    <button
                      onClick={() => {
                        isAdmin && onEdit(user)
                      }}
                      className={` ${
                        isAdmin
                          ? "text-blue-600 hover:text-blue-900"
                          : "cursor-not-allowed text-gray-300 "
                      } `}>
                      <Edit2 className='h-4 w-4' />
                    </button>
                    <button
                      onClick={() => {
                        isAdmin && onDelete(user.id)
                      }}
                      className={` ${
                        isAdmin
                          ? "text-red-600 hover:text-red-900"
                          : "cursor-not-allowed text-gray-300 "
                      } `}>
                      <Trash2 className='h-4 w-4' />
                    </button>
                    <button className='text-gray-400 hover:text-gray-600'>
                      <MoreVertical className='h-4 w-4' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTable