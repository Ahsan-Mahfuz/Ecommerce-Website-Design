'use client'
import { useEffect, useState } from 'react'
import ElectronicsCard from './ElectronicsCard'

const Electronics = () => {
  const [electronics, setElectronics] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchElectronics = async () => {
      try {
        const response = await fetch('/api/electronics')
        const data = await response.json()
        setElectronics(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching electronics:', error)
        setLoading(false)
      }
    }

    fetchElectronics()
  }, [])

  if (loading) {
    return (
      <div className="mt-20 mb-20">
        <div className="flex justify-between font-bold">
          <p className="text-xl">
            Top
            <span className="text-blue-400"> Electronics Brands</span>
          </p>
          <a href="#">
            View all <span className="text-blue-400">❯</span>
          </a>
        </div>
        <hr className="mt-2" />
        <hr className="bg-blue-400 h-1 w-28 -mt-0.5" />
        <div className="flex flex-wrap gap-1 justify-between items-center">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="mt-5 bg-gray-800 animate-pulse shadow-xl rounded flex justify-between p-4 w-full max-w-[400px]"
            >
              <div className="flex-1">
                <div className="h-5 bg-gray-500 w-24 mb-2"></div>
                <div className="h-3 bg-gray-500 w-16"></div>
              </div>
              <div className="w-20 h-20 bg-gray-500 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-20 mb-20">
      <div className="flex justify-between font-bold">
        <p className="text-xl">
          Top
          <span className="text-blue-400"> Electronics Brands</span>
        </p>
        <a href="#">
          View all <span className="text-blue-400">❯</span>
        </a>
      </div>
      <hr className="mt-2" />
      <hr className="bg-blue-400 h-1 w-44 -mt-0.5" />
      <div className="flex flex-wrap gap-3 justify-between items-center">
        {electronics.map((item) => (
          <ElectronicsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Electronics
