'use client'

import { Phone } from 'lucide-react'
import { useState } from 'react'

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/554934361447?text=Olá Lucas! Tenho interesse nos pneus BFGoodrich KO3"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute bottom-16 left-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 animate-fade-in">
          Fale com o Lucas
          <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  )
}