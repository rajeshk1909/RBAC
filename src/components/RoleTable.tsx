import { Role } from "../types"
import { Edit2, Trash2, MoreVertical } from "lucide-react"

interface RoleTableProps {
  isAdmin: boolean
  roles: Role[]
  onEdit: (role: Role) => void
  onDelete: (roleId: string) => void
}

const RoleTable = ({ roles, onEdit, onDelete, isAdmin }: RoleTableProps) => {
  return (
    <div className='bg-white rounded-lg shadow overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Role Name
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Description
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Permissions
            </th>
            <th className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {roles.map((role, index: number) => (
            <tr key={index} className='hover:bg-gray-50'>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='text-sm font-medium text-gray-900'>
                  {role.name}
                </div>
              </td>
              <td className='px-6 py-4'>
                <div className='text-sm text-gray-500'>{role.description}</div>
              </td>
              <td className='px-6 py-4'>
                <div className='flex flex-wrap gap-1'>
                  {role.permissions.slice(0, 3).map((permission) => (
                    <span
                      key={permission.id}
                      className='px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800'>
                      {permission.name}
                    </span>
                  ))}
                  {role.permissions.length > 3 && (
                    <span className='px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800'>
                      +{role.permissions.length - 3} more
                    </span>
                  )}
                </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                <div className='flex items-center justify-end space-x-2'>
                  <button
                    onClick={() => {
                      isAdmin && onEdit(role)
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
                      isAdmin && onDelete(role.id)
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
  )
}

export default RoleTable
