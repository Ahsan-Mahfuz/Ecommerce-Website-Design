'use client'
import { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories')
        const data = await response.json()
        setCategories(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching categories:', error)
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (loading) {
    return (
      <div className="mt-20">
        <div className="flex justify-between font-bold">
          <p className="text-xl">
            Shop From
            <span className="text-blue-400"> Top Categories</span>
          </p>
          <a href="#">
            View all <span className="text-blue-400">❯</span>
          </a>
        </div>
        <hr className="mt-2" />
        <hr className="bg-blue-400 h-1 w-52 -mt-0.5" />
        <div className="flex flex-wrap gap-1 justify-between items-center">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center mt-5 animate-pulse"
            >
              <div className="rounded-full bg-gray-300 h-36 w-36"></div>
              <div className="mt-3 h-5 w-20 bg-gray-300 rounded"></div>
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
          Shop From
          <span className="text-blue-400"> Top Categories</span>
        </p>
        <a href="#">
          View all <span className="text-blue-400">❯</span>
        </a>
      </div>
      <hr className="mt-2" />
      <hr className="bg-blue-400 h-1 w-40 -mt-0.5" />
      <div className="flex flex-wrap gap-3 justify-between items-center">
        {categories.map((category) => (
          <CategoriesCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Categories
