'use client'

import { useEffect } from 'react'

interface MercadoPagoSDKProps {
  publicKey?: string
  locale?: string
  options?: {
    advancedOptions?: {
      enableBankDebit?: boolean
      enableCreditCard?: boolean
      enablePix?: boolean
    }
  }
}

export default function MercadoPagoSDK({ 
  publicKey = 'TEST-4f1dd17e-5e92-43a9-b3c0-f123c87e5536',
  locale = 'pt-BR',
  options = {}
}: MercadoPagoSDKProps) {
  useEffect(() => {
    // Only load SDK on client side
    if (typeof window === 'undefined') return

    // Check if SDK is already loaded
    if (window.MercadoPago) {
      console.log('Mercado Pago SDK already loaded')
      return
    }

    // Create script element
    const script = document.createElement('script')
    script.src = 'https://sdk.mercadopago.com/js/v2'
    script.async = true
    
    script.onload = () => {
      try {
        // Initialize Mercado Pago SDK
        const mp = new (window as any).MercadoPago(publicKey, {
          locale: locale,
          ...options
        })
        
        // Make it globally available
        window.MercadoPago = mp
        window.mercadoPagoInstance = mp
        
        console.log('Mercado Pago SDK initialized successfully')
      } catch (error) {
        console.error('Failed to initialize Mercado Pago SDK:', error)
      }
    }

    script.onerror = () => {
      console.error('Failed to load Mercado Pago SDK')
    }

    // Add script to document
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      // Remove script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [publicKey, locale, options])

  return null
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    MercadoPago: any
    mercadoPagoInstance: any
  }
}