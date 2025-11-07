"use client"

import { useEffect, useState } from "react"

interface Testimonial {
  quote: string
  author: string
  title?: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Truncate long testimonials to match Ben Fabish's length (approx 280 characters)
  const MAX_QUOTE_LENGTH = 280
  const truncateQuote = (quote: string) => {
    if (quote.length <= MAX_QUOTE_LENGTH) return quote
    return quote.slice(0, MAX_QUOTE_LENGTH).trim() + "..."
  }

  // Create a continuous loop by duplicating testimonials
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  // Reset to start seamlessly when we reach the end
  useEffect(() => {
    if (currentIndex >= testimonials.length * 2) {
      setTimeout(() => {
        setCurrentIndex(testimonials.length)
      }, 500) // Wait for transition to complete
    }
  }, [currentIndex, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev - 1)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 0.5}rem))` }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 px-3">
              <article className="flex h-full flex-col rounded-3xl border border-white bg-white p-6 shadow-lg shadow-slate-900/5">
                <div className="text-lg" aria-label="5 out of 5 stars">
                  <span className="text-amber-400">★★★★★</span>
                </div>
                <p className="mt-4 grow text-sm leading-6 text-slate-700">"{truncateQuote(testimonial.quote)}"</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-900">{testimonial.author}</p>
                  {testimonial.title && (
                    <p className="mt-1 text-xs text-slate-600">{testimonial.title}</p>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goToPrevious}
          className="flex size-12 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-700 shadow-md transition hover:border-teal-500 hover:text-teal-600 hover:shadow-lg"
          aria-label="Previous testimonials"
        >
          <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => {
            const isActive = currentIndex % testimonials.length === index
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setCurrentIndex(testimonials.length + index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 10000)
                }}
                className={`size-3 rounded-full transition-all ${
                  isActive
                    ? "w-8 bg-teal-600"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial set ${index + 1}`}
                aria-current={isActive}
              />
            )
          })}
        </div>

        <button
          type="button"
          onClick={goToNext}
          className="flex size-12 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-700 shadow-md transition hover:border-teal-500 hover:text-teal-600 hover:shadow-lg"
          aria-label="Next testimonials"
        >
          <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

