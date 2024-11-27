import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"
import { Shield } from "lucide-react"
import { registerSchema } from "../validations/auth"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store"
import { addUser } from "@/store/slices/usersSlice"
import { useToast } from "@/components/ToastContext"

type RegisterFormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector((state: RootState) => state.users.users)
  const { showToast } = useToast()

  const onSubmit = async (data: RegisterFormData) => {
    const checkEmail = userData.find((user) => user.email === data.email)
    try {
      if (!checkEmail?.email) {
        const newUser = {
          email: data.email,
          id: userData.length
            ? (parseInt(userData[userData.length - 1].id) + 1).toString()
            : "1",
          password: data.password,
          name: data.name,
          role: "User",
          status: "Active",
          lastLogin: new Date().toISOString(),
        }
        dispatch(addUser(newUser))
        await new Promise((resolve) => setTimeout(resolve, 1000))
        navigate("/login")
        showToast("success", "Account created successfully!")
      } else {
        showToast("info", "Email already exists!")
      }
    } catch (error) {
      console.error("Registration failed:", error)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center py-12 px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='flex justify-center mb-4'>
          <Shield className='w-12 h-12 text-blue-600 animate-bounce' />
        </div>
        <h2 className='text-center text-3xl font-extrabold text-gray-900'>
          Create Your Account
        </h2>
        <p className='mt-2 text-center gap-2 flex justify-center font-lexend font-medium text-sm text-gray-600'>
          Already have an account?
          <Link
            to='/login'
            className='font-medium text-blue-600 hover:text-blue-500'>
            Sign in
          </Link>
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10'>
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <Input
              label='Full Name'
              {...register("name")}
              error={errors.name}
            />

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

            <Input
              label='Confirm Password'
              type='password'
              {...register("confirmPassword")}
              error={errors.confirmPassword}
            />

            <Button
              type='submit'
              className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-transform transform hover:scale-105'
              loading={isSubmitting}>
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
