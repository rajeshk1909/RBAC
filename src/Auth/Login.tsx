import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginSchema } from "../validations/auth"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { setAdmin, setCurrentUser } from "../store/slices/authSlice"
import { Shield } from "lucide-react"
import { RootState } from "@/store"

type LoginFormData = {
  email: string
  password: string
}

export default function Login() {
  // For clear local Storage
  // localStorage.clear()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userData = useSelector((state: RootState) => state.users.users)

  const onSubmit = async (data: LoginFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const ADMIN = {
      email: "admin@vrvsecurity.com",
      password: "Admin123",
    }

    const currentUser = userData?.find((user) => user.email === data.email)

    // Handle admin
    if (data.email === ADMIN.email) {
      if (data.password === ADMIN.password) {
        const admin = {
          id: "Admin",
          name: "Admin",
          email: ADMIN?.email,
          role: "Admin",
          status: "Active",
          lastLogin: new Date().toISOString(),
        }

        dispatch(setCurrentUser(admin))
        dispatch(setAdmin(true))
        navigate("/")
        return
      } else {
        alert("Invalid password for admin account.")
        return
      }
    }

    // Handle non-admin users
    if (currentUser) {
      if (currentUser.password === data.password) {
        const newUser = {
          name: currentUser.name,
          email: currentUser?.email,
          id: currentUser?.id,
          role: "User",
          status: currentUser?.status,
          lastLogin: new Date().toISOString(),
        }

        dispatch(setAdmin(false))
        dispatch(setCurrentUser(newUser))
        navigate("/")
      } else {
        alert("Incorrect password. Please try again.")
      }
    } else {
      alert("No account found with this email. Please check your email.")
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='flex justify-center animate-bounce'>
          <Shield className='w-12 h-12 text-blue-600' />
        </div>
        <h2 className='mt-6 text-center text-3xl font-montserrat font-bold text-gray-900'>
          Sign in to your account
        </h2>
        <p className='mt-2 text-center flex justify-center gap-2 font-medium font-lexend text-sm text-gray-600'>
          Or
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

            <Button
              type='submit'
              className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-transform transform hover:scale-105'
              loading={isSubmitting}>
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
