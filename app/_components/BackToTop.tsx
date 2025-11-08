"use client"

import { useEffect, useState } from "react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex size-14 items-center justify-center rounded-2xl border-2 border-teal-400/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-teal-400 shadow-2xl shadow-teal-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-teal-300 hover:shadow-teal-500/50 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      {/* Animated glow effect */}
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-t from-teal-500/20 to-transparent opacity-60 blur-sm" />
      
      {/* Arrow icon */}
      <svg
        className="relative z-10 size-6 transition-transform duration-300 group-hover:-translate-y-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>

      {/* Ripple effect on hover */}
      <span className="absolute inset-0 rounded-2xl border-2 border-teal-400/40 opacity-0 transition-all duration-500 hover:scale-150 hover:opacity-100" />
    </button>
  )
}

