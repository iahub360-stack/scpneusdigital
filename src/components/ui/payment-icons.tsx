'use client'

import { CreditCard } from 'lucide-react'

// SVG Componente para Mercado Pago
export function MercadoPagoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect 
        x="2" 
        y="2" 
        width="20" 
        height="20" 
        rx="4" 
        fill="#009EE3"
      />
      <path 
        d="M7 12H17M7 8H17M7 16H14" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <circle 
        cx="18" 
        cy="6" 
        r="2" 
        fill="#00B4E6"
      />
    </svg>
  )
}

// SVG Componente para Pix
export function PixIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect 
        x="2" 
        y="2" 
        width="20" 
        height="20" 
        rx="4" 
        fill="#32BCAD"
      />
      <path 
        d="M8 8L12 12L8 16M12 8L16 12L12 16" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle 
        cx="12" 
        cy="12" 
        r="8" 
        stroke="white" 
        strokeWidth="1" 
        fill="none"
      />
    </svg>
  )
}

// SVG Componente para Cartão de Crédito
export function CreditCardIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect 
        x="3" 
        y="6" 
        width="18" 
        height="12" 
        rx="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M3 10H21" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M7 14H9" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M11 14H13" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  )
}