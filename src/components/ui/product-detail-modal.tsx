'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  X, 
  ShoppingCart, 
  Truck, 
  Shield, 
  MapPin, 
  Clock,
  Plus,
  Minus,
  Package,
  CheckCircle,
  Zap
} from 'lucide-react'
import { ProductImageCarousel } from './product-image-carousel'
import { ShippingSimulatorModal } from './shipping-simulator-modal'
import { useBuyNow } from '@/lib/cart-utils'

interface ProductDetailModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: string
    name: string
    sku: string
    price: number
    size: string
    loadIndex?: string
    stock: number
    description?: string
    features?: any
  }
}

export function ProductDetailModal({ isOpen, onClose, product }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [showShippingModal, setShowShippingModal] = useState(false)
  const { buyNow } = useBuyNow()

  if (!isOpen) return null

  const calculateTotal = () => {
    return (product.price * quantity).toFixed(2)
  }

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const buyNowAction = () => {
    buyNow(product, quantity)
    onClose()
  }

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose()
          }
        }}
      >
        <div 
          className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b p-6 z-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                <p className="text-sm text-gray-500 mt-1">SKU: {product.sku}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Imagens - Carousel Mode */}
              <div>
                <ProductImageCarousel
                  images={[]}
                  alt={product.name}
                  className="aspect-square"
                  simple={false}
                />
              </div>

              {/* Informações do Produto */}
              <div className="space-y-6">
                {/* Preço */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">R$ {product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500">unidade</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {product.stock} unidades em estoque
                    </Badge>
                    {product.loadIndex && (
                      <Badge variant="outline">
                        Índice de Carga: {product.loadIndex}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Descrição */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Descrição</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description || 'BFGoodrich All-Terrain T/A KO3 - O lendário pneu All-Terrain da BFGoodrich evoluiu. Desenvolvido para caminhonetes e veículos off-road que exigem aderência superior, resistência e durabilidade em qualquer terreno.'}
                  </p>
                </div>

                {/* Características */}
                {product.features && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Características</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.terrain && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm">Terrenos: {product.features.terrain.join(', ')}</span>
                        </div>
                      )}
                      {product.features.warranty && (
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          <span className="text-sm">Garantia: {product.features.warranty}</span>
                        </div>
                      )}
                      {product.features.technology && (
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-primary" />
                          <span className="text-sm">Tecnologia: {product.features.technology.join(', ')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Quantidade */}
                <div>
                  <Label className="text-sm font-medium">Quantidade</Label>
                  <div className="flex items-center gap-3 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value)
                        if (val > 0 && val <= product.stock) {
                          setQuantity(val)
                        }
                      }}
                      className="w-20 text-center"
                      min="1"
                      max={product.stock}
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Simulador de Frete */}
                <div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setShowShippingModal(true)}
                  >
                    <Truck className="w-4 h-4 mr-2" />
                    Calcular Frete
                  </Button>
                </div>

                {/* Resumo e Compra */}
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Subtotal ({quantity} unidade{quantity > 1 ? 's' : ''})</span>
                        <span className="font-semibold">R$ {calculateTotal()}</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">Total</span>
                          <span className="text-2xl font-bold text-primary">R$ {calculateTotal()}</span>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-[#3483FA] hover:bg-[#2968C8] text-white py-3"
                        onClick={buyNowAction}
                        disabled={product.stock === 0}
                      >
                        <Zap className="w-5 h-5 mr-2" />
                        Comprar Agora
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Informações Adicionais */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Por que comprar conosco?</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Produtos 100% originais com garantia oficial</li>
                        <li>• Entrega para todo Brasil</li>
                        <li>• Atendimento especializado</li>
                        <li>• Parcelamento em até 12x sem juros</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Simulador de Frete */}
      <ShippingSimulatorModal
        isOpen={showShippingModal}
        onClose={() => setShowShippingModal(false)}
      />
    </>
  )
}