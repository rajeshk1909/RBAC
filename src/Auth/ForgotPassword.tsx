import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { forgotOrResetPasswordSchema } from "../validations/auth"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Shield } from "lucide-react"
import { RootState } from "@/store"
import { z } from "zod"
import { updatePassword } from "@/store/slices/usersSlice"

type ForgotPasswordData = z.infer<typeof forgotOrResetPasswordSchema>

const ForgotPassword = () => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector((state: RootState) => state.users.users)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotOrResetPasswordSchema),
  })

  const onSubmit = async (formData: ForgotPasswordData) => {
    // console.log("Form Data:", formData)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const existingUser = userData.find((user) => user.email === formData.email)

    console.log(existingUser?.email)
    console.log(formData?.email)

    if (!isValidEmail) {
      // Validate the email
      if (existingUser) {
        console.log("Email is valid:", existingUser.email)
        setIsValidEmail(true)
      } else {
        alert("Email valid Email!")
      }
    } else {
      // Update the user password
      if (existingUser) {
        console.log("Changing password for:", existingUser.email)

        const newPassword = formData.newPassword?.toString()
        if (newPassword) {
          dispatch(
            updatePassword({
              email: existingUser.email,
              newPassword: newPassword,
            })
          )
          console.log("Password successfully updated.")
          navigate("/login")
        } else {
          console.error("New password is required!")
        }
      } else {
        console.error("User not found for password update.")
      }
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center rounded-md py-12 px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='flex justify-center animate-bounce'>
          <Shield className='w-12 h-12 text-blue-600' />
        </div>
        <h2 className='mt-6 text-center text-3xl font-montserrat font-bold text-gray-900'>
          Change Your Password
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
        <div className='bg-white py-8 px-6 shadow-lg rounded-lg sm:rounded-lg sm:px-10'>
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            {!isValidEmail && (
              <Input
                label='Email address'
                type='email'
                {...register("email")}
                error={errors.email}
              />
            )}

            {isValidEmail && (
              <div className='space-y-10 mt-2 mb-4'>
                <Input
                  label='New Password'
                  type='password'
                  {...register("newPassword")}
                  error={errors.newPassword}
                />
                <Input
                  label='Confirm Password'
                  type='password'
                  {...register("reEnterNewPassword")}
                  error={errors.reEnterNewPassword}
                />
              </div>
            )}

            <Button
              type='submit'
              className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-transform transform hover:scale-105'
              loading={isSubmitting}>
              {isValidEmail ? "Change Password" : "Forgot Password"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
