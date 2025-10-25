'use client'

import { Badge } from '@/components/ui/badge'
import { Tag, Truck, Percent, Gift } from 'lucide-react'

interface CouponBadge {
  code: string
  description: string
  icon: React.ReactNode
  type: 'percentage' | 'fixed' | 'shipping'
}

export function CouponBadges() {
  const coupons: CouponBadge[] = [
    {
      code: 'SCPNEUS10',
      description: '10% de desconto',
      icon: <Percent className="w-3 h-3" />,
      type: 'percentage'
    },
    {
      code: 'FRETEGRATIS',
      description: 'Frete grátis',
      icon: <Truck className="w-3 h-3" />,
      type: 'shipping'
    },
    {
      code: 'BFG20',
      description: '20% de desconto',
      icon: <Percent className="w-3 h-3" />,
      type: 'percentage'
    },
    {
      code: 'BOAVINDA',
      description: 'R$ 50 de desconto',
      icon: <Gift className="w-3 h-3" />,
      type: 'fixed'
    }
  ]

  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-600 font-medium mb-2">Cupons disponíveis:</p>
      <div className="grid grid-cols-2 gap-2">
        {coupons.map((coupon) => (
          <div
            key={coupon.code}
            className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => {
              // Copiar código para o clipboard
              navigator.clipboard.writeText(coupon.code)
              // Opcional: mostrar notificação
            }}
          >
            <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-blue-600">
              {coupon.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900 truncate">{coupon.code}</p>
              <p className="text-xs text-gray-600 truncate">{coupon.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Clique em um cupom para copiar o código
      </p>
    </div>
  )
}