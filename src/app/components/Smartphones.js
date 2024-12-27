'use client'
import { useEffect, useState } from 'react'
import SmartphonesCard from './SmartphonesCard'

const Smartphones = () => {
  const [smartphones, setSmartphones] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSmartphones = async () => {
      try {
        const response = await fetch('/api/smartphones')
        const data = await response.json()
        setSmartphones(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching smartphones:', error)
        setLoading(false)
      }
    }

    fetchSmartphones()
  }, [])

  if (loading) {
    return (
      <div className="mt-20">
        <div className="flex justify-between font-bold ">
          <p className="text-xl">
            Grab the best deal on{' '}
            <span className="text-blue-400">Smartphones</span>
          </p>
          <a href="#">
            View all <span className="text-blue-400">❯</span>
          </a>
        </div>
        <hr className="mt-2" />
        <hr className="bg-blue-400 h-1 w-72 -mt-0.5" />
        <div className="flex flex-wrap gap-2 justify-between items-center">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-60 h-64 bg-gray-300 animate-pulse rounded-lg"
            ></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-20">
      <div className="flex justify-between font-bold ">
        <p className="text-xl">
          Grab the best deal on{' '}
          <span className="text-blue-400">Smartphones</span>
        </p>
        <a href="#">
          View all <span className="text-blue-400">❯</span>
        </a>
      </div>
      <hr className="mt-2" />
      <hr className="bg-blue-400 h-1 w-72 -mt-0.5" />
      <div className="flex flex-wrap gap-2 justify-between items-center">
        {smartphones.map((phone) => (
          <SmartphonesCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default Smartphones
