'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Play } from 'lucide-react'

const ReactPlayer = dynamic(() => import('react-youtube'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-sm">Carregando vídeo...</p>
      </div>
    </div>
  )
})

interface VideoPlayerProps {
  videoId: string
  startTime: number
  endTime: number
  isPlaying: boolean
  onVideoEnd: () => void
  title: string
}

export function VideoPlayer({ 
  videoId, 
  startTime, 
  endTime, 
  isPlaying, 
  onVideoEnd,
  title 
}: VideoPlayerProps) {
  const [isReady, setIsReady] = useState(false)
  const [hasError, setHasError] = useState(false)
  const playerRef = useRef<any>(null)

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      fs: 0,
      loop: 0,
      modestbranding: 1,
      mute: 1,
      rel: 0,
      showinfo: 0,
      start: startTime,
      end: endTime,
      playsinline: 1,
      origin: typeof window !== 'undefined' ? window.location.origin : '',
      widgetid: 1
    },
  }

  const onReady = (event: any) => {
    setIsReady(true)
    playerRef.current = event.target
    try {
      event.target.playVideo()
      event.target.mute()
    } catch (error) {
      console.error('Error playing video:', error)
      setHasError(true)
    }
  }

  const onEnd = () => {
    onVideoEnd()
  }

  const onError = (error: any) => {
    console.error('YouTube player error:', error)
    setHasError(true)
    setTimeout(() => {
      onVideoEnd()
    }, 2000) // Wait 2 seconds before next slide
  }

  useEffect(() => {
    if (playerRef.current && isReady) {
      try {
        if (isPlaying) {
          playerRef.current.playVideo()
        } else {
          playerRef.current.pauseVideo()
        }
      } catch (error) {
        console.error('Error controlling video:', error)
      }
    }
  }, [isPlaying, isReady])

  // Fallback for video loading errors
  if (hasError) {
    return (
      <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Play className="w-8 h-8 text-black" />
          </div>
          <p className="text-lg font-medium mb-2">Vídeo Indisponível</p>
          <p className="text-sm text-gray-300">Avançando para próxima imagem...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      {!isReady && !hasError && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm">Carregando vídeo...</p>
          </div>
        </div>
      )}
      <div className="relative w-full h-full">
        <ReactPlayer
          videoId={videoId}
          opts={opts}
          onReady={onReady}
          onEnd={onEnd}
          onError={onError}
          className="absolute inset-0 w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          iframeClassName="w-full h-full object-cover"
        />
      </div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" />
    </div>
  )
}