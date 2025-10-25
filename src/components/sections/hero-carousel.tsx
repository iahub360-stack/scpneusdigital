'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { VideoPlayer } from '@/components/ui/video-player'

interface Slide {
  id: number
  type: 'image' | 'video'
  src: string
  alt: string
  title: string
  subtitle: string
  videoId?: string
  startTime?: number
  endTime?: number
}

const slides: Slide[] = [
  {
    id: 1,
    type: 'image',
    src: '/images/hero/hero-ford-ranger-ko3.png',
    alt: 'Ford Ranger com pneus BFGoodrich KO3',
    title: 'BFGoodrich KO3',
    subtitle: 'O Rei do Off-Road'
  },
  {
    id: 2,
    type: 'video',
    src: '',
    alt: 'BFGoodrich KO3 - Apresentação',
    title: 'Conheça o KO3',
    subtitle: 'Tecnologia e performance',
    videoId: 'zYS_4OSB9iQ',
    startTime: 30,
    endTime: 40
  },
  {
    id: 3,
    type: 'image',
    src: '/images/hero/hero-ko3-action-1.jpg',
    alt: 'BFGoodrich KO3 em ação extrema',
    title: 'Tração Extrema',
    subtitle: 'Supere qualquer limite'
  },
  {
    id: 4,
    type: 'video',
    src: '',
    alt: 'BFGoodrich KO3 - Terrenos difíceis',
    title: 'Domine o Terreno',
    subtitle: 'Performance em qualquer condição',
    videoId: 'zYS_4OSB9iQ',
    startTime: 60,
    endTime: 70
  },
  {
    id: 5,
    type: 'image',
    src: '/images/hero/hero-ko3-mountain.jpg',
    alt: 'BFGoodrich KO3 em montanhas rochosas',
    title: 'Domine as Montanhas',
    subtitle: 'Controle total em terrenos íngremes'
  },
  {
    id: 6,
    type: 'video',
    src: '',
    alt: 'BFGoodrich KO3 - Teste de resistência',
    title: 'Resistência Superior',
    subtitle: 'Construído para durar',
    videoId: 'zYS_4OSB9iQ',
    startTime: 90,
    endTime: 100
  },
  {
    id: 7,
    type: 'image',
    src: '/images/hero/hero-ko3-mud.jpg',
    alt: 'BFGoodrich KO3 na lama',
    title: 'Afunde na Aventura',
    subtitle: 'Performance extrema na lama'
  },
  {
    id: 8,
    type: 'video',
    src: '',
    alt: 'BFGoodrich KO3 - Ação na lama',
    title: 'Supere Desafios',
    subtitle: 'Tração onde ninguém chega',
    videoId: 'zYS_4OSB9iQ',
    startTime: 120,
    endTime: 130
  },
  {
    id: 9,
    type: 'image',
    src: '/images/hero/hero-ko3-desert.jpg',
    alt: 'BFGoodrich KO3 em dunas de areia',
    title: 'Conquiste o Deserto',
    subtitle: 'Estabilidade máxima em areia'
  },
  {
    id: 10,
    type: 'video',
    src: '',
    alt: 'BFGoodrich KO3 - Deserto e areia',
    title: 'Versatilidade Extrema',
    subtitle: 'De qualquer lugar, para qualquer lugar',
    videoId: 'zYS_4OSB9iQ',
    startTime: 150,
    endTime: 160
  },
  {
    id: 11,
    type: 'image',
    src: '/images/hero/hero-ko3-forest.jpg',
    alt: 'BFGoodrich KO3 em trilhas florestais',
    title: 'Explore a Natureza',
    subtitle: 'Tração superior em trilhas'
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIsVideoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsTransitioning(false), 1000)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIsVideoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsTransitioning(false), 1000)
  }, [isTransitioning])

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIsVideoPlaying(false)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 1000)
  }, [isTransitioning])

  const handleVideoEnd = useCallback(() => {
    if (isAutoplay) {
      nextSlide()
    }
  }, [isAutoplay, nextSlide])

  // Autoplay functionality - adjusted for videos
  useEffect(() => {
    if (!isAutoplay) return

    const currentSlideData = slides[currentSlide]
    const duration = currentSlideData.type === 'video' ? 15000 : 12000 // Videos get 15s, images 12s

    const interval = setInterval(() => {
      if (currentSlideData.type === 'image') {
        nextSlide()
      }
    }, duration)

    return () => clearInterval(interval)
  }, [isAutoplay, currentSlide, nextSlide])

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsAutoplay(false)
    if (slides[currentSlide].type === 'video') {
      setIsVideoPlaying(false)
    }
  }
  
  const handleMouseLeave = () => {
    setIsAutoplay(true)
    if (slides[currentSlide].type === 'video') {
      setIsVideoPlaying(true)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === ' ' && slides[currentSlide].type === 'video') {
        e.preventDefault()
        setIsVideoPlaying(!isVideoPlaying)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, currentSlide, isVideoPlaying])

  // Touch/Swipe support
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && !isTransitioning) {
      nextSlide()
    }
    if (isRightSwipe && !isTransitioning) {
      prevSlide()
    }
  }

  // Handle video playing state when slide changes
  useEffect(() => {
    const currentSlideData = slides[currentSlide]
    if (currentSlideData.type === 'video') {
      // Small delay to ensure video is ready
      setTimeout(() => {
        setIsVideoPlaying(isAutoplay)
      }, 1000)
    } else {
      setIsVideoPlaying(false)
    }
  }, [currentSlide, isAutoplay])

  const currentSlideData = slides[currentSlide]

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Container */}
      <div className="relative h-full w-full">
        {/* Slides */}
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.type === 'image' ? (
                <>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                    quality={95}
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                </>
              ) : (
                <VideoPlayer
                  videoId={slide.videoId!}
                  startTime={slide.startTime!}
                  endTime={slide.endTime!}
                  isPlaying={index === currentSlide && isVideoPlaying}
                  onVideoEnd={handleVideoEnd}
                  title={slide.title}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 ease-out">
                  {currentSlideData.title}
                  <br />
                  <span className="text-yellow-400">{currentSlideData.subtitle}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto transition-all duration-700 ease-out delay-100">
                  Tração extrema para qualquer terreno. A linha completa All-Terrain T/A KO3 
                  com tecnologia CoreGard Max™ e 60.000 km de garantia.
                </p>
                {currentSlideData.type === 'video' && (
                  <div className="flex items-center justify-center space-x-2 text-yellow-400">
                    <Play className="w-5 h-5" />
                    <span className="text-sm">Vídeo em reprodução</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Desktop Only */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 px-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black ${
                index === currentSlide
                  ? 'bg-yellow-400 w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>

        {/* Slide Counter - Desktop Only */}
        <div className="hidden md:flex absolute top-8 right-8 z-20 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-white text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
          <div 
            className="h-full bg-yellow-400 transition-all duration-1000 ease-linear"
            style={{
              animation: isAutoplay && currentSlideData.type === 'image' ? 'progress 12s linear infinite' : 
                        isAutoplay && currentSlideData.type === 'video' ? 'progress 15s linear infinite' : 'none'
            }}
          />
        </div>

        {/* Video Controls - Only show for video slides */}
        {currentSlideData.type === 'video' && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
            <button
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="text-white hover:text-yellow-400 transition-colors p-2"
              aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
            >
              {isVideoPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            <div className="text-white text-sm">
              <span className="text-yellow-400">Vídeo</span> • Espaço para play/pause
            </div>
          </div>
        )}
      </div>

      {/* Custom styles for progress bar animation */}
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}