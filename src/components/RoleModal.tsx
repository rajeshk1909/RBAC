import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { X } from "lucide-react"
import { Input } from "./Input"
import { Button } from "./Button"
import { Role, Permission } from "../types"
import { roleSchema } from "../validations/role"

interface RoleModalProps {
  role?: Role
  permissions: Permission[]
  onSubmit: (data: Partial<Role>) => void
  onClose: () => void
}

export default function RoleModal({
  role,
  permissions,
  onSubmit,
  onClose,
}: RoleModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(roleSchema),
    defaultValues: role || {},
  })

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      <div className='flex min-h-screen items-center justify-center p-4'>
        <div
          className='fixed inset-0 bg-black bg-opacity-25'
          onClick={onClose}
        />

        <div className='relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-xl font-semibold'>
              {role ? "Edit Role" : "Add Role"}
            </h2>
            <button
              onClick={onClose}
              className='text-gray-400 hover:text-gray-500'>
              <X className='h-5 w-5' />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <Input label='Name' {...register("name")} error={errors.name} />

            <Input
              label='Description'
              {...register("description")}
              error={errors.description}
            />

            <div className='space-y-2'>
              <label className='block text-sm font-medium text-gray-700'>
                Permissions
              </label>
              <div className='max-h-48 overflow-y-auto border rounded-md p-2'>
                {permissions.map((permission) => (
                  <label
                    key={permission.id}
                    className='flex items-center space-x-2 p-2 hover:bg-gray-50'>
                    <input
                      type='checkbox'
                      {...register("permissions")}
                      value={permission.id}
                      defaultChecked={role?.permissions.some(
                        (p) => p.id === permission.id
                      )}
                      className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                    />
                    <div>
                      <p className='text-sm font-medium'>{permission.name}</p>
                      <p className='text-xs text-gray-500'>
                        {permission.description}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
              {errors.permissions && (
                <p className='text-sm text-red-600'>
                  {errors.permissions.message}
                </p>
              )}
            </div>

            <div className='flex justify-end space-x-3 pt-4'>
              <Button type='button' variant='outline' onClick={onClose}>
                Cancel
              </Button>
              <Button type='submit' loading={isSubmitting}>
                {role ? "Update" : "Create"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
