'use client'

import { useState } from 'react'
import { Truck } from 'lucide-react'
import { ShippingSimulatorModal } from './shipping-simulator-modal'

export function ShippingButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden sm:flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Truck className="w-4 h-4" />
        <span className="text-sm font-medium">Calcular Frete</span>
      </button>

      <ShippingSimulatorModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}