import { useState } from "react"
import { rolesData, rolesType } from "../data/roles"
import ActionButton from "./ActionButton"
import RoleEdit from "./RoleEdit"

const dataTable = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
            <th className='px-4 py-2 border'>data Name</th>
            <th className='px-4 py-2 border'>Permissions</th>
            <th className='px-4 py-2 border'>Actions</th>
          </tr>
        </thead>
        <tbody className='font-lexend font-medium'>
          {rolesData.map((data: rolesType, index: number) => (
            <tr key={index}>
              <td className='px-4 py-2 border text-center'>{data.name}</td>
              <td className='px-4 py-2 border text-center'>
                {data.permissions.join(", ")}
              </td>
              <td className='px-4 py-2 border flex items-center gap-5 justify-center'>
                <ActionButton
                  type='edit'
                  onClick={() => {
                    handleEdit(index)
                    handleOpen()
                  }}
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
      <RoleEdit open={open} handleClose={handleClose} />
    </div>
  )
}

export default dataTable
