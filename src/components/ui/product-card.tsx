'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Phone, Truck, Shield, Star, ArrowDown, Zap } from 'lucide-react'
import { useBuyNow } from '@/lib/cart-utils'
import { useCart } from '@/components/cart-provider'
import { Product } from '@/store/cart-store'
import { ProductImageCarousel } from './product-image-carousel'
import { ProductDetailModal } from './product-detail-modal'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
  onWhatsApp: (product: Product) => void
}

export function ProductCard({ product, onAddToCart, onWhatsApp }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const { buyNow } = useBuyNow()

  const originalPrice = product.price * 1.25 // Simulate original price with 25% discount
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100)

  const handleBuyNow = () => {
    buyNow(product, 1)
  }

  const handleProductClick = () => {
    setShowDetailModal(true)
  }

  return (
    <>
      <Card 
        className={`group relative bg-white border-0 shadow-md hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden cursor-pointer ${
          isHovered ? 'transform -translate-y-1' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 z-20">
            <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-2 py-1 text-xs shadow-lg animate-pulse hover:scale-110 transition-transform duration-200">
              {discount}% OFF
            </Badge>
          </div>
        )}

        {/* Stock Alert Badge */}
        {product.stock <= 10 && product.stock > 0 && (
          <div className="absolute top-3 right-3 z-20">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-2 py-1 text-xs shadow-lg animate-bounce hover:scale-110 transition-transform duration-200">
              Últimas {product.stock}!
            </Badge>
          </div>
        )}

        <CardContent className="p-0">
          {/* Product Image - Simple Mode */}
          <div 
            className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
            onClick={handleProductClick}
          >
            <ProductImageCarousel
              images={[]}
              alt={product.name}
              className="w-full h-full"
              simple={true}
            />
          </div>

          {/* Product Info */}
          <div className="p-4 space-y-3">
            {/* Product Title */}
            <div className="space-y-1">
              <h3 
                className="font-semibold text-gray-900 text-sm line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                onClick={handleProductClick}
              >
                {product.name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="font-medium">{product.size}</span>
                <span>•</span>
                <span>Índice: {product.loadIndex}</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">(4.8)</span>
              <span className="text-xs text-green-600 font-medium">• {product.stock} vendidos</span>
            </div>

            {/* Price Section */}
            <div className="space-y-1">
              {discount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 line-through">
                    R$ {originalPrice.toFixed(2)}
                  </span>
                  <ArrowDown className="w-3 h-3 text-green-600" />
                </div>
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  R$ {product.price.toFixed(2)}
                </span>
                <span className="text-xs text-gray-500">unid.</span>
              </div>
              {discount > 0 && (
                <div className="text-xs text-green-600 font-medium">
                  Economize R$ {(originalPrice - product.price).toFixed(2)}
                </div>
              )}
            </div>

            {/* Benefits */}
            <div className="flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-green-600" />
                <span>Garantia</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-blue-600" />
                <span>Entrega</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-green-600" />
                <span>Compra Segura</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <Button 
                id={`cart-btn-${product.id}`}
                className={`w-full bg-[#3483FA] hover:bg-[#2968C8] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg ${
                  product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleBuyNow}
                disabled={product.stock === 0}
              >
                <Zap className="w-4 h-4 mr-2" />
                {product.stock === 0 ? 'Esgotado' : 'Comprar Agora'}
              </Button>
              
              <Button 
                variant="outline"
                className={`w-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                  isHovered ? 'shadow-md' : ''
                }`}
                onClick={() => onWhatsApp(product)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Comprar via WhatsApp
              </Button>
            </div>
          </div>
        </CardContent>

        {/* Hover Effect Overlay */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
      </Card>

      {/* Product Detail Modal */}
      <ProductDetailModal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        product={product}
      />
    </>
  )
}