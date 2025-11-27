"use client"

import Image from "next/image"
import { useState } from "react"

interface YouTubeEmbedProps {
  videoId: string
  title: string
  thumbnailUrl?: string
  className?: string
}

export function YouTubeEmbed({ videoId, title, thumbnailUrl, className }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [imgError, setImgError] = useState(false)

  // Try multiple YouTube thumbnail URLs
  const ytThumbnail = imgError 
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  
  const thumbnail = thumbnailUrl || ytThumbnail

  if (isPlaying) {
    return (
      <div className={`relative aspect-video overflow-hidden rounded-2xl ${className || ""}`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className={`relative aspect-video overflow-hidden rounded-2xl cursor-pointer group ${className || ""}`} onClick={() => setIsPlaying(true)}>
      {!thumbnailUrl && imgError ? (
        // Fallback to local image if YouTube thumbnail fails
        <Image
          src="/images/img/hero-backsplash.png"
          alt={title}
          fill
          className="object-cover"
        />
      ) : (
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          onError={() => setImgError(true)}
          unoptimized={!thumbnailUrl}
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <div className="rounded-full bg-red-600 p-4 shadow-lg group-hover:scale-110 transition-transform">
          <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

