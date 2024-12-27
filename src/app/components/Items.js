'use client'

import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

const itemsList = [
  'Groceries',
  'Premium Fruits',
  'Home & Kitchen',
  'Fashion',
  'Electronics',
  'Beauty',
  'Home Improvement',
  'Sports, Toys & Luggage',
]

function Items() {
  const [activeButton, setActiveButton] = useState(null)

  const handleButtonClick = (index) => {
    setActiveButton(index)
  }

  return (
     <div className="flex flex-wrap mt-5 gap-1 justify-between">
     {itemsList.map((item, index) => (
       <button
         key={index}
         onClick={() => handleButtonClick(index)}
         className={`btn btn-sm ${
           activeButton === index ? 'bg-blue-500 text-white' : 'bg-gray-100'
         } w-full sm:w-auto`}
       >
         {item} <FaAngleDown />
       </button>
     ))}
   </div>
   
  )
}

export default Items
