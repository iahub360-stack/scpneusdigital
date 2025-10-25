'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

interface LucasAvatarProps {
  size?: 'sm' | 'md' | 'lg'
  showBadge?: boolean
  className?: string
}

export function LucasAvatar({ size = 'md', showBadge = true, className = '' }: LucasAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const badgeSizeClasses = {
    sm: 'w-4 h-4 text-xs',
    md: 'w-5 h-5 text-xs',
    lg: 'w-6 h-6 text-sm'
  }

  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-blue-600`}>
        <Image
          src="/lucas-attendant.jpg"
          alt="Lucas - Assistente SC Pneus"
          width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback se a imagem não carregar
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const fallback = target.nextElementSibling as HTMLElement
            if (fallback) {
              fallback.classList.remove('hidden')
            }
          }}
        />
        {/* Fallback - Avatar com iniciais */}
        <div className="hidden w-full h-full bg-blue-600 flex items-center justify-center text-white font-bold">
          L
        </div>
      </div>
      {showBadge && (
        <Badge 
          className={`absolute -bottom-1 -right-1 ${badgeSizeClasses[size]} bg-blue-600 text-white rounded-full p-0 flex items-center justify-center`}
        >
          AI
        </Badge>
      )}
    </div>
  )
}