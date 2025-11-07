"use client"

import Image from "next/image"
import { useState } from "react"

interface GalleryItem {
  src: string
  alt: string
  caption?: string
}

interface GalleryGridProps {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  return (
    <>
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.src}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={640}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 grid place-items-center bg-slate-950/30 opacity-0 transition group-hover:opacity-100">
                  <span className="flex size-12 items-center justify-center rounded-full bg-white/90 text-xl font-semibold text-slate-900">
                    +
                  </span>
                </div>
              </div>
              {item.caption ? (
                <figcaption className="px-5 py-4 text-sm text-slate-600">{item.caption}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -right-4 -top-4 z-10 flex size-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition hover:bg-slate-100"
              aria-label="Close image"
            >
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1920}
                  height={1920}
                  className="h-auto w-full max-h-[80vh] object-contain"
                />
              </div>
              {selectedImage.caption && (
                <div className="border-t border-slate-200 bg-white px-6 py-4">
                  <p className="text-sm text-slate-600">{selectedImage.caption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

