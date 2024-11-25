import React from "react"
import { permissions } from "../mockData"

const PermissionTable: React.FC = () => {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-semibold font-lexend'>Permissions</h2>
      <div className='grid grid-cols-3 gap-6'>
        {permissions.map((data, index) => (
          <div key={index} className='p-4 bg-gray-200 rounded-lg'>
            <input type='checkbox' id={data} />
            <label htmlFor={data} className='ml-2'>
              {data}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PermissionTable
