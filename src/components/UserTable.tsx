import React from "react"
import { usersData, usersDataTypes } from "../data/usersData"
import ActionButton from "./ActionButton"

const UserTable: React.FC = () => {

  const handleEdit = (id : number) => {
    console.log(id)
  }

  const handleDelete = (id: number) => {
    console.log(id)
  }

  return (
    <div className='overflow-x-auto mb-10'>
      <table className='min-w-full table-auto border-collapse'>
        <thead className='bg-gray-100 font-montserrat '>
          <tr>
            <th className='px-6 py-5 text-left font-bold text-gray-700 border-b'>
              Name
            </th>
            <th className='px-6 py-5 text-left font-bold text-gray-700 border-b'>
              Email
            </th>
            <th className='px-6 py-5 text-left font-bold text-gray-700 border-b'>
              Role
            </th>
            <th className='px-6 py-5 text-left font-bold text-gray-700 border-b'>
              Status
            </th>
            <th className='px-6 py-5 text-center font-bold text-gray-700 border-b'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='text-sm'>
          {usersData.map((user: usersDataTypes, index: number) => (
            <tr
              key={user.id}
              className={`font-lexend hover:bg-gray-200 font-medium cursor-pointer ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              }`}>
              <td className='px-6 py-4 border-b'>{user.name}</td>
              <td className='px-6 py-4 border-b'>{user.email}</td>
              <td className='px-6 py-4 border-b'>{user.role}</td>
              <td className='px-6 py-4 border-b'>{user.status}</td>
              <td className='px-6 py-4 border-b flex gap-5 items-center justify-center'>
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

export default UserTable
