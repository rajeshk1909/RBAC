import React, { forwardRef, useState } from "react"
import { FieldError } from "react-hook-form"
import { Eye, EyeOff } from "lucide-react" // Icon library (lucide-react)

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type = "text", ...props }, ref) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
      setPasswordVisible((prev) => !prev)
    }

    const isPasswordField = type === "password"

    return (
      <div className='flex flex-col space-y-1'>
        <label className='text-sm font-medium font-lexend text-gray-700'>
          {label}
        </label>
        <div className='relative'>
          <input
            ref={ref}
            className={`block w-full rounded-lg px-4 py-2 text-sm bg-gray-50 border ${
              error
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            } focus:outline-none focus:ring-2 transition-shadow duration-200 placeholder-gray-400 hover:shadow-md`}
            type={isPasswordField && isPasswordVisible ? "text" : type}
            {...props}
          />
          {isPasswordField && (
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700'
              aria-label={
                isPasswordVisible ? "Hide password" : "Show password"
              }>
              {isPasswordVisible ? (
                <EyeOff className='w-5 h-5' />
              ) : (
                <Eye className='w-5 h-5' />
              )}
            </button>
          )}
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
