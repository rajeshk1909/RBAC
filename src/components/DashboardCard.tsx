import { Link } from "react-router-dom"
import { DashboardDataTypes } from "../data/DashboardData"
import Lottie from "lottie-react"
import right_arrow from "../assets/right_arroe.json"
// import { toast } from "react-toastify"

interface DashboardDataPropsTypes {
  data: DashboardDataTypes
}

const DashboardCard = ({ data }: DashboardDataPropsTypes) => {
  return (
    <div
      className={` text-white p-6 cursor-pointer rounded-lg shadow-md ${data.bgColor}`}>
      <h3 className='text-xl font-bold uppercase font-montserrat'>
        {data.title}
      </h3>
      <p className='text-lg mt-2 mb-2 font-medium font-lexend'>
        {data.description}
      </p>
      <Link
        to={data.link}
        className='text-white flex items-center gap-3 hover:text-gray-300 font-medium font-kufam'>
        <p>{`Go To ${data.title}`}</p>
        <Lottie animationData={right_arrow} className='h-9 w-10' />
      </Link>
    </div>
  )
}

export default DashboardCard
