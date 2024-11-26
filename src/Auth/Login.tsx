import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginSchema } from "../validations/auth"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { setUser } from "../store/slices/authSlice"
import { Shield } from "lucide-react"

type LoginFormData = {
  email: string
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data
      const userData = {
        id: "1",
        email: data.email,
        name: "John Doe",
        role: {
          id: "1",
          name: "Admin",
          description: "Full system access",
          permissions: [],
        },
        status: "active" as const,
        lastLogin: new Date().toISOString(),
      }

      dispatch(setUser(userData))
      navigate("/")
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='flex justify-center'>
          <Shield className='w-12 h-12 text-blue-600' />
        </div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Sign in to your account
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Or{" "}
          <Link
            to='/register'
            className='font-medium text-blue-600 hover:text-blue-500'>
            create a new account
          </Link>
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <Input
              label='Email address'
              type='email'
              {...register("email")}
              error={errors.email}
            />

            <Input
              label='Password'
              type='password'
              {...register("password")}
              error={errors.password}
            />

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-900'>
                  Remember me
                </label>
              </div>

              <div className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-blue-600 hover:text-blue-500'>
                  Forgot your password?
                </a>
              </div>
            </div>

            <Button type='submit' className='w-full' loading={isSubmitting}>
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
