import { roles } from "../mockData"
import ActionButton from "./ActionButton"

const RoleTable = () => {
  const handleEdit = (id: number) => {
    console.log(id)
  }

  const handleDelete = (id: number) => {
    console.log(id)
  }

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full table-auto border-collapse'>
        <thead className='font-montserrat font-semibold uppercase '>
          <tr>
            <th className='px-4 py-2 border'>Role Name</th>
            <th className='px-4 py-2 border'>Permissions</th>
            <th className='px-4 py-2 border'>Actions</th>
          </tr>
        </thead>
        <tbody className='font-lexend font-medium'>
          {roles.map((role, index: number) => (
            <tr key={index}>
              <td className='px-4 py-2 border text-center'>{role.name}</td>
              <td className='px-4 py-2 border text-center'>
                {role.permissions.join(", ")}
              </td>
              <td className='px-4 py-2 border flex items-center gap-5 justify-center'>
                <ActionButton
                  type='edit'
                  onClick={() => handleEdit(index)}
                  index={1}
                />
                <ActionButton
                  type='delete'
                  onClick={() => handleDelete(index)}
                  index={1}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RoleTable
