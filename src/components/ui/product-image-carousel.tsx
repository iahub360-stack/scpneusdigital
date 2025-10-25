'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductImageCarouselProps {
  images: string[]
  alt: string
  className?: string
  simple?: boolean // Para cards simples (1 imagem) ou detalhes (3 imagens)
}

export function ProductImageCarousel({ images, alt, className = '', simple = false }: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Array de imagens disponíveis
  const availableImages = [
    'https://z-cdn-media.chatglm.cn/files/c2b815eb-6d05-4ac0-b508-2151d214a6d8_bfgoodrich-all-terrain-t-a-ko3-12277121.jpg?auth_key=1792861521-919fc8e654ba45c486fcb9bb1e64a785-0-9d5c935e932ca6bbe8ec13c5ebd84151',
    'https://z-cdn-media.chatglm.cn/files/60d64bfa-5d82-403a-a4fd-7f1ad26f97c4_ALL-TERRAIN-TA-KO3-1-1080x675.jpg?auth_key=1792861521-83a742b187db40319b4a462ad73de55f-0-e66551f809d9454b6f9c80b00a2e80f7',
    'https://z-cdn-media.chatglm.cn/files/c05b5300-fc98-45b8-905f-6d7b620d9a71_pneu-bfgoodrich-aro-17-all-terrain-ko3-265-65r17-116-113s-letras-brancas-1.jpg?auth_key=1792861521-afc310f667624585abc7d4b24e1f1d99-0-54827b37e936d9f3040ceb9698547459',
    'https://z-cdn-media.chatglm.cn/files/7999b959-f3e3-4f2d-8296-d175eb69cc7f_pneu-bfgoodrich-aro-17-all-terrain-ko3-265-65r17-116-113s-letras-brancas-2.jpg?auth_key=1792861521-6331ebbab7ed4ee39bbf130bdda762f8-0-e100bed383302744ab097e1a51402513'
  ]

  // Array de 4 imagens principais para o carrossel de detalhes
  const detailImages = [
    'https://z-cdn-media.chatglm.cn/files/c2b815eb-6d05-4ac0-b508-2151d214a6d8_bfgoodrich-all-terrain-t-a-ko3-12277121.jpg?auth_key=1792861521-919fc8e654ba45c486fcb9bb1e64a785-0-9d5c935e932ca6bbe8ec13c5ebd84151',
    'https://z-cdn-media.chatglm.cn/files/60d64bfa-5d82-403a-a4fd-7f1ad26f97c4_ALL-TERRAIN-TA-KO3-1-1080x675.jpg?auth_key=1792861521-83a742b187db40319b4a462ad73de55f-0-e66551f809d9454b6f9c80b00a2e80f7',
    'https://z-cdn-media.chatglm.cn/files/c05b5300-fc98-45b8-905f-6d7b620d9a71_pneu-bfgoodrich-aro-17-all-terrain-ko3-265-65r17-116-113s-letras-brancas-1.jpg?auth_key=1792861521-afc310f667624585abc7d4b24e1f1d99-0-54827b37e936d9f3040ceb9698547459',
    'https://z-cdn-media.chatglm.cn/files/7999b959-f3e3-4f2d-8296-d175eb69cc7f_pneu-bfgoodrich-aro-17-all-terrain-ko3-265-65r17-116-113s-letras-brancas-2.jpg?auth_key=1792861521-6331ebbab7ed4ee39bbf130bdda762f8-0-e100bed383302744ab097e1a51402513'
  ]

  // Imagem aleatória para cards simples
  const [simpleImage, setSimpleImage] = useState('')

  // Modo carrossel com 3 imagens para página de detalhes
  const displayImages = detailImages

  // Selecionar imagem aleatória para cards simples
  useEffect(() => {
    if (simple) {
      const randomIndex = Math.floor(Math.random() * availableImages.length)
      setSimpleImage(availableImages[randomIndex])
    }
  }, [simple])

  // Índice aleatório inicial (apenas para modo carrossel)
  useEffect(() => {
    if (!simple) {
      setCurrentIndex(Math.floor(Math.random() * displayImages.length))
    }
  }, [displayImages.length, simple])

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + displayImages.length) % displayImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  // Se for modo simples, usar apenas uma imagem aleatória
  if (simple) {
    // Aguardar a seleção da imagem aleatória
    if (!simpleImage) {
      return (
        <div className={`relative ${className}`}>
          <div className="w-full h-full bg-gray-200 animate-pulse" />
        </div>
      )
    }
    
    return (
      <div className={`relative ${className}`}>
        <img
          src={simpleImage}
          alt={alt}
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            // Tentar outra imagem aleatória em caso de erro
            const fallbackIndex = Math.floor(Math.random() * availableImages.length)
            target.src = availableImages[fallbackIndex]
          }}
        />
      </div>
    )
  }

  // Modo carrossel com 3 imagens para página de detalhes
  return (
    <div className={`relative group ${className}`}>
      {/* Imagem Principal */}
      <div className="relative overflow-hidden rounded-lg bg-gray-100">
        <img
          src={displayImages[currentIndex]}
          alt={alt}
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://z-cdn-media.chatglm.cn/files/c2b815eb-6d05-4ac0-b508-2151d214a6d8_bfgoodrich-all-terrain-t-a-ko3-12277121.jpg?auth_key=1792861521-919fc8e654ba45c486fcb9bb1e64a785-0-9d5c935e932ca6bbe8ec13c5ebd84151'
          }}
        />
        
        {/* Botões de Navegação */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full shadow-lg"
          onClick={prevImage}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full shadow-lg"
          onClick={nextImage}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Indicadores (Thumbnails) - 4 imagens */}
      <div className="flex gap-2 mt-3 justify-center overflow-x-auto">
        {displayImages.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex 
                ? 'border-primary scale-110 shadow-lg' 
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <img
              src={image}
              alt={`${alt} - Imagem ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                // Usar primeira imagem como fallback
                target.src = detailImages[0]
              }}
            />
          </button>
        ))}
      </div>

      {/* Contador */}
      <div className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentIndex + 1} / {displayImages.length}
      </div>
    </div>
  )
}