'use client'
import { useEffect, useState } from 'react'

const Slider = () => {
  const [slides, setSlides] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('/api/slides')
        const data = await response.json()
        setSlides(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching slides:', error)
        setLoading(false)
      }
    }

    fetchSlides()
  }, [])

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  if (loading) {
    return (
      <div className="relative w-full mx-auto mt-5 overflow-hidden">
        <div className="flex">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-[300px] bg-gray-300 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full mx-auto mt-5 overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="w-full h-[300px] object-fill"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
      >
        ❯
      </button>
    </div>
  )
}

export default Slider
