'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { cn } from '@/lib/utils'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  brand: string
  size: string
}

interface FloatingCartProps {
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function FloatingCart({ isOpen: externalIsOpen, onOpenChange }: FloatingCartProps = {}) {
  const router = useRouter()
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const { items, removeItem, updateQuantity, clearCart } = useCart()

  // Usar estado externo se fornecido, senão usar estado interno
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen
  const setIsOpen = onOpenChange || setInternalIsOpen

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = items.reduce((total, item) => total + ((item.price || 0) * item.quantity), 0)

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    updateQuantity(id, newQuantity)
  }

  const handleRemoveItem = (id: string) => {
    removeItem(id)
  }

  const handleCheckout = () => {
    // Salvar itens no localStorage para a página de carrinho
    localStorage.setItem('cart', JSON.stringify(items))
    setIsOpen(false)
    router.push('/carrinho')
  }

  return (
    <>
      {/* Floating Cart Button - apenas quando não controlado externamente */}
      {externalIsOpen === undefined && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200 relative group"
            size="icon"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold min-w-[20px] h-5 flex items-center justify-center">
                {totalItems}
              </Badge>
            )}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Ver carrinho ({totalItems} itens)
            </span>
          </Button>
        </div>
      )}

      {/* Cart Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-200"
            onClick={() => setIsOpen(false)}
          />

          {/* Cart Panel */}
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300">
            <Card className="h-full rounded-none border-0">
              <CardHeader className="flex flex-row items-center justify-between border-b">
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Meu Carrinho
                  {totalItems > 0 && (
                    <Badge variant="secondary">{totalItems} itens</Badge>
                  )}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>

              <CardContent className="flex flex-col h-full p-0">
                {items.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center p-8">
                    <div className="text-center">
                      <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Seu carrinho está vazio</h3>
                      <p className="text-gray-600 mb-4">Adicione produtos para continuar</p>
                      <Button 
                        onClick={() => {
                          setIsOpen(false)
                          router.push('/')
                        }}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Ver Produtos
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 text-sm truncate">{item.name}</h4>
                            <p className="text-xs text-gray-600">{item.brand} • {item.size}</p>
                            <p className="text-sm font-bold text-red-600">R$ {(item.price || 0).toFixed(2)}</p>
                          </div>
                          
                          <div className="flex flex-col items-center space-y-2">
                            <div className="flex items-center space-x-1">
                              <Button
                                variant="outline"
                                size="icon"
                                className="w-6 h-6"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="w-6 h-6"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-6 h-6 text-red-600 hover:text-red-700"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Cart Footer */}
                    <div className="border-t p-4 space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Subtotal</span>
                          <span>R$ {totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Frete</span>
                          <span className="text-green-600">A calcular</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span className="text-red-600">R$ {totalPrice.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button 
                          onClick={handleCheckout}
                          className="w-full bg-red-600 hover:bg-red-700"
                        >
                          Finalizar Compra
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => setIsOpen(false)}
                          className="w-full"
                        >
                          Continuar Comprando
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </>
  )
}