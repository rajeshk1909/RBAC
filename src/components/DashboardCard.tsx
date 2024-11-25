import { Link } from "react-router-dom"
import { DashboardDataTypes } from "../data/DashboardData"
// import { toast } from "react-toastify"

interface DashboardDataPropsTypes {
  data: DashboardDataTypes
}

const DashboardCard = ({ data }: DashboardDataPropsTypes) => {
  return (
    <div className={` text-white p-6 cursor-pointer rounded-lg shadow-md ${data.bgColor}`}>
      <h3 className='text-xl font-bold uppercase font-montserrat'>
        {data.title}
      </h3>
      <p className='text-lg mt-2 mb-4 font-medium font-lexend'>
        {data.description}
      </p>
      <Link
        to={data.link}
        className='text-white font-normal hover:text-gray-300 inline-block font-kufam'>
        {`Go To ${data.title}`}
      </Link>
    </div>
  )
}

export default DashboardCard
