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

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000) // Auto-advance every 8 seconds

    return () => clearInterval(timer)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 15 seconds of manual navigation
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length
    goToSlide(newIndex)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full px-4">
              <article className="mx-auto flex max-w-4xl flex-col rounded-3xl border border-white bg-white p-8 shadow-lg shadow-slate-900/5 md:p-10">
                <div className="text-2xl" aria-label="5 out of 5 stars">
                  <span className="text-amber-400">★★★★★</span>
                </div>
                <p className="mt-6 text-lg leading-8 text-slate-700">"{testimonial.quote}"</p>
                <div className="mt-8">
                  <p className="text-base font-semibold text-slate-900">{testimonial.author}</p>
                  {testimonial.title && (
                    <p className="mt-1 text-sm text-slate-600">{testimonial.title}</p>
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
          aria-label="Previous testimonial"
        >
          <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`size-3 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-teal-600"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goToNext}
          className="flex size-12 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-700 shadow-md transition hover:border-teal-500 hover:text-teal-600 hover:shadow-lg"
          aria-label="Next testimonial"
        >
          <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

