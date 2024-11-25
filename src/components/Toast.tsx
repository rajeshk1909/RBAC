import React from "react"
import { ToastContainer, toast, ToastOptions } from "react-toastify"
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
} from "react-icons/fa"
import "react-toastify/dist/ReactToastify.css"

// Custom toast style

const toastStyles = {
  success: {
    background: "#28a745",
    icon: <FaCheckCircle className='text-white' />,
    messageColor: "text-white",
  },
  error: {
    background: "#dc3545",
    icon: <FaTimesCircle className='text-white' />,
    messageColor: "text-white",
  },
  info: {
    background: "#17a2b8",
    icon: <FaExclamationCircle className='text-white' />,
    messageColor: "text-white",
  },
}

type ToastType = "success" | "error" | "info"

interface CustomToastProps {
  type: ToastType
  message: string
}

export const CustomToast: React.FC<CustomToastProps> = ({ type, message }) => {
  const showToast = () => {
    const toastOptions: ToastOptions = {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeButton: false,
      icon: toastStyles[type].icon,
      style: {
        backgroundColor: toastStyles[type].background,
        borderRadius: "0.375rem",
        padding: "12px 20px",
      },
    }

    switch (type) {
      case "success":
        toast.success(message, toastOptions)
        break
      case "error":
        toast.error(message, toastOptions)
        break
      case "info":
        toast.info(message, toastOptions)
        break
      default:
        break
    }
  }

  return (
    <div className='my-4'>
      <button
        onClick={showToast}
        className='px-6 py-2 rounded-md text-white font-semibold focus:outline-none transition duration-200 ease-in-out transform hover:scale-105'
        style={{ backgroundColor: toastStyles[type].background }}>
        Show {type.charAt(0).toUpperCase() + type.slice(1)} Toast
      </button>
    </div>
  )
}

const Toast: React.FC = () => {
  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={true}
        closeButton={false}
        newestOnTop={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={true}
        className='z-50'
      />
    </div>
  )
}

export default Toast
