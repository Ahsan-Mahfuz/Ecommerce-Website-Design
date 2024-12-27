'use client'
import { useEffect, useState } from 'react'
import DailyEssentialsCard from './DailyEssentialsCard'

const DailyEssentials = () => {
  const [essentials, setEssentials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEssentials = async () => {
      try {
        const response = await fetch('/api/daily-essentials')
        const data = await response.json()
        setEssentials(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching essentials:', error)
        setLoading(false)
      }
    }

    fetchEssentials()
  }, [])

  if (loading) {
    return (
      <div className="mt-20">
        <div className="flex justify-between font-bold">
          <p className="text-xl">
            Daily
            <span className="text-blue-400"> Essentials</span>
          </p>
          <a href="#">
            View all <span className="text-blue-400">❯</span>
          </a>
        </div>
        <hr className="mt-2" />
        <hr className="bg-blue-400 h-1 w-28 -mt-0.5" />
        <div className="flex flex-wrap gap-2 justify-between items-center">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center mt-5 mb-20 animate-pulse"
            >
              <div className="bg-gray-300 rounded-2xl w-[200px] h-[200px]"></div>
              <div className="mt-3 bg-gray-300 w-16 h-4"></div>
              <div className="mt-2 bg-gray-300 w-24 h-5"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-20">
      <div className="flex justify-between font-bold">
        <p className="text-xl">
          Daily
          <span className="text-blue-400"> Essentials</span>
        </p>
        <a href="#">
          View all <span className="text-blue-400">❯</span>
        </a>
      </div>
      <hr className="mt-2" />
      <hr className="bg-blue-400 h-1 w-28 -mt-0.5" />
      <div className="flex flex-wrap gap-2 justify-between items-center">
        {essentials.map((item) => (
          <DailyEssentialsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default DailyEssentials
