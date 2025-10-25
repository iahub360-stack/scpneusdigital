'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Truck, MapPin, X, Calculator, Clock } from 'lucide-react'

interface ShippingOption {
  id: string
  name: string
  price: number
  deliveryTime: string
  type: 'pickup' | 'express' | 'convention'
  icon: React.ReactNode
  color: string
}

interface ShippingSimulatorModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ShippingSimulatorModal({ isOpen, onClose }: ShippingSimulatorModalProps) {
  const [cep, setCep] = useState('')
  const [isCalculating, setIsCalculating] = useState(false)
  const [calculated, setCalculated] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const pickupOption: ShippingOption = {
    id: 'pickup',
    name: 'Retirada na Loja',
    price: 0,
    deliveryTime: '2 dias úteis',
    type: 'pickup',
    icon: <MapPin className="w-5 h-5" />,
    color: 'bg-green-500'
  }

  const calculateShipping = async () => {
    if (!cep) {
      alert('Por favor, digite um CEP.')
      return
    }

    setIsCalculating(true)
    setCalculated(false)

    // Simulate API call - always returns the same result regardless of CEP
    setTimeout(() => {
      setIsCalculating(false)
      setCalculated(true)
      setShowResults(true)
    }, 2000)
  }

  const getShippingOptions = (): ShippingOption[] => {
    if (!calculated) return [pickupOption]

    return [
      pickupOption,
      {
        id: 'jadlog',
        name: 'Frete Convênio Jadlog Express',
        price: 139.00,
        deliveryTime: '5 a 7 dias úteis',
        type: 'convention',
        icon: <Truck className="w-5 h-5" />,
        color: 'bg-blue-500'
      },
      {
        id: 'rodonaves',
        name: 'Frete Expresso RTE RODONAVES',
        price: 244.90,
        deliveryTime: '2 a 4 dias úteis',
        type: 'express',
        icon: <Truck className="w-5 h-5" />,
        color: 'bg-purple-500'
      }
    ]
  }

  const formatCep = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length <= 5) return cleaned
    return `${cleaned.slice(0, 5)}-${cleaned.slice(5, 8)}`
  }

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCep(e.target.value)
    setCep(formatted)
    if (formatted.length > 0) {
      setCalculated(false)
      setShowResults(false)
    }
  }

  const resetCalculator = () => {
    setCep('')
    setCalculated(false)
    setShowResults(false)
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <Card 
        className="w-full max-w-2xl bg-white shadow-2xl max-h-[85vh] overflow-y-auto my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <Truck className="w-8 h-8" />
              Simulador de Frete
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <p className="text-blue-100 mt-2">
            Calcule o frete para seu endereço ou veja a opção de retirada
          </p>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* CEP Input Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Digite seu CEP</h3>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  placeholder="00000-000"
                  value={cep}
                  onChange={handleCepChange}
                  maxLength={9}
                  className="text-lg h-12 border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Button
                onClick={calculateShipping}
                disabled={!cep || isCalculating}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 font-semibold transition-all duration-200 disabled:opacity-50"
              >
                {isCalculating ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Calculando...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    <span>Calcular</span>
                  </div>
                )}
              </Button>
              {cep && (
                <Button
                  variant="outline"
                  onClick={resetCalculator}
                  className="h-12 px-4 border-gray-300 hover:bg-gray-50"
                >
                  <X className="w-5 h-5" />
                </Button>
              )}
            </div>
          </div>

          {/* Pickup Option - Always Visible */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              Retirada na Loja
            </h3>
            
            <Card className="border-2 border-green-200 bg-green-50 hover:bg-green-100 transition-colors duration-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Retirada nosso CD</h4>
                      <p className="text-sm text-gray-600">Xanxerê - SC</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">2 dias úteis retirada</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">R$ 00,00</div>
                    <Badge className="bg-green-500 text-white mt-1">GRÁTIS</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Shipping Options - Show After Calculation */}
          {showResults && (
            <div className="border-t pt-6 space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <Truck className="w-5 h-5 text-blue-600" />
                Opções de Entrega para {cep || 'seu CEP'}
              </h3>

              {getShippingOptions().slice(1).map((option) => (
                <Card 
                  key={option.id}
                  className="border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          {option.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {option.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-500">{option.deliveryTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          R$ {option.price.toFixed(2)}
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`mt-1 ${
                            option.type === 'express' 
                              ? 'border-purple-500 text-purple-600 bg-purple-50' 
                              : 'border-blue-500 text-blue-600 bg-blue-50'
                          }`}
                        >
                          {option.type === 'express' ? 'Expresso' : 'Convênio'}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Info Section */}
          <div className="border-t pt-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Informações sobre o frete</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Prazos de entrega contados a partir da confirmação do pagamento</li>
                    <li>• Frete calculado para um pneu (valores podem variar para quantidades maiores)</li>
                    <li>• Opção de retirada disponível mediante agendamento</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}