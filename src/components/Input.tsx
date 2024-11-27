import React, { forwardRef } from "react"
import { FieldError } from "react-hook-form"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className='flex flex-col space-y-1'>
        <label className='text-sm font-medium font-lexend text-gray-700'>{label}</label>
        <div className='relative'>
          <input
            ref={ref}
            className={`block w-full rounded-lg px-4 py-2 text-sm bg-gray-50 border ${
              error
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            } focus:outline-none focus:ring-2 transition-shadow duration-200 placeholder-gray-400 hover:shadow-md`}
            {...props}
          />
          {error && (
            <p className='absolute mt-1 text-xs text-red-600' role='alert'>
              {error.message}
            </p>
          )}
        </div>
      </div>
    )
  }
)
