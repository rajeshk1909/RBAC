import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"
import { Shield } from "lucide-react"
import { registerSchema } from "../validations/auth"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

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

  const navigate = useNavigate()

  const onSubmit = async (data: RegisterFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Registration data:", data)
      navigate("/login")
    } catch (error) {
      console.error("Registration failed:", error)
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='flex justify-center'>
          <Shield className='w-12 h-12 text-blue-600' />
        </div>
        <h2 className='mt-4 text-center text-3xl font-extrabold text-gray-900'>
          Create your account
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Already have an account?{" "}
          <Link
            to='/login'
            className='font-medium text-blue-600 hover:text-blue-500'>
            Sign in
          </Link>
        </p>
      </div>

      <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
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

            <Button type='submit' className='w-full' loading={isSubmitting}>
              Create account
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
