import React from "react"
import {
  chartData,
  chartOptions,
  DashboardData,
  DashboardDataTypes,
} from "../data/DashboardData"
import DashboardCard from "../components/DashboardCard"
import { FaUsers, FaChartLine, FaTasks } from "react-icons/fa"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from "chart.js"
import { Chart } from "react-chartjs-2"
import NumberTicker from "@/components/NumberTicker"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController
)

const cardData = [
  {
    id: 1,
    title: "Total Users",
    value: "1234",
    icon: <FaUsers className='text-4xl text-blue-500' />,
  },
  {
    id: 2,
    title: "Revenue",
    value: "12345",
    icon: <FaChartLine className='text-4xl text-green-500' />,
  },
  {
    id: 3,
    title: "Completed Tasks",
    value: "764",
    icon: <FaTasks className='text-4xl text-orange-500' />,
  },
]

type cardDataTypes = (typeof cardData)[0]

const Dashboard: React.FC = () => {

  return (
    <div className='p-6 lg:mx-[10%] mx-[3%] bg-gray-100 min-h-screen mb-20 rounded-2xl'>
      <h2 className='text-3xl font-bold mb-6 uppercase text-gray-700'>
        Dashboard
      </h2>
      
      <div className='grid grid-cols-1 mb-12 mt-10 md:grid-cols-3 gap-6'>
        {DashboardData.map((data: DashboardDataTypes, index: number) => (
          <DashboardCard data={data} key={index} />
        ))}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-14'>
        {cardData.map((card: cardDataTypes, index: number) => (
          <div
            key={index}
            className='bg-white cursor-pointer shadow-md rounded-lg p-6 flex items-center justify-between hover:shadow-xl transition duration-300'>
            <div>
              <h4 className='text-gray-500 font-lexend text-lg font-medium'>
                {card.title}
              </h4>
              <p className='flex items-center gap-1'>
                {index === 1 && (
                  <p className='font-lexend text-2xl font-bold'>$</p>
                )}
                <NumberTicker value={Number(card.value)} />
              </p>
            </div>
            {card.icon}
          </div>
        ))}
      </div>

      <div className='bg-white shadow-md rounded-lg p-6 mb-8'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4 font-lexend'>
          Analytics Overview
        </h3>
        <div className='relative h-64'>
          <Chart type='line' data={chartData} options={chartOptions} />
        </div>
      </div>

    </div>
  )
}

export default Dashboard
