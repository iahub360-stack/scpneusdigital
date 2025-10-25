'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ShoppingCart, X, Plus, Minus, Trash2, ArrowLeft, User, Phone, Mail, MapPin, CreditCard, MessageCircle, Truck, Tag } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { LucasAvatar } from '@/components/ui/lucas-avatar'
import { Toast } from '@/components/ui/toast-notification'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  brand: string
  size: string
}

interface BuyerData {
  name: string
  email: string
  phone: string
  cpf: string
  address: {
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
  }
}

export default function CartPage() {
  const router = useRouter()
  const { items, removeItem, updateQuantity, clearCart } = useCart()
  const [buyerData, setBuyerData] = useState<BuyerData>({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    address: {
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: ''
    }
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error' | 'warning' | 'info'; title: string; message: string }>({ type: 'success', title: '', message: '' })
  
  // Estados para frete e cupom
  const [selectedShipping, setSelectedShipping] = useState<'retirada' | 'jadlog' | 'rodonaves' | null>(null)
  const [shippingCost, setShippingCost] = useState(0)
  const [shippingDays, setShippingDays] = useState('')
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [couponLoading, setCouponLoading] = useState(false)

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = items.reduce((total, item) => total + ((item.price || 0) * item.quantity), 0)
  const finalTotal = totalPrice + shippingCost - discount

  // Função para selecionar opção de frete
  const selectShipping = (option: 'retirada' | 'jadlog' | 'rodonaves') => {
    setSelectedShipping(option)
    
    switch (option) {
      case 'retirada':
        setShippingCost(0)
        setShippingDays('2 dias úteis retirada')
        break
      case 'jadlog':
        setShippingCost(139)
        setShippingDays('5 a 7 dias úteis entrega')
        break
      case 'rodonaves':
        setShippingCost(244.90)
        setShippingDays('2 a 4 dias úteis entrega')
        break
    }
  }

  // Função para aplicar cupom
  const applyCoupon = async () => {
    if (!couponCode.trim()) {
      setToastMessage({
        type: 'error',
        title: 'Cupom Inválido',
        message: 'Por favor, digite um código de cupom.'
      })
      setShowToast(true)
      return
    }

    setCouponLoading(true)
    
    try {
      // Simulação de validação de cupom
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      let discountAmount = 0
      
      // Cupons válidos
      switch (couponCode.toUpperCase()) {
        case '10SCP':
          discountAmount = totalPrice * 0.10 // 10% de desconto
          break
        case 'FRETESCP':
          discountAmount = shippingCost // Frete grátis
          break
        case '20SCP':
          discountAmount = totalPrice * 0.20 // 20% de desconto
          break
        default:
          setToastMessage({
            type: 'error',
            title: 'Cupom Inválido',
            message: 'Este cupom não é válido ou expirou.'
          })
          setShowToast(true)
          setCouponLoading(false)
          return
      }
      
      setDiscount(discountAmount)
      
      setToastMessage({
        type: 'success',
        title: 'Cupom Aplicado!',
        message: `Desconto de R$ ${discountAmount.toFixed(2)} aplicado com sucesso.`
      })
      setShowToast(true)
      
    } catch (error) {
      setToastMessage({
        type: 'error',
        title: 'Erro no Cupom',
        message: 'Não foi possível validar o cupom. Tente novamente.'
      })
      setShowToast(true)
    } finally {
      setCouponLoading(false)
    }
  }

  // Carregar itens do localStorage ao montar
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart)
        // Aqui você poderia sincronizar com o estado do carrinho se necessário
      } catch (error) {
        console.error('Erro ao carregar carrinho:', error)
      }
    }
  }, [])

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    updateQuantity(id, newQuantity)
  }

  const handleRemoveItem = (id: string) => {
    removeItem(id)
  }

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      setBuyerData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof BuyerData] as any),
          [child]: value
        }
      }))
    } else {
      setBuyerData(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }

  const handleCheckout = async () => {
    if (!selectedShipping) {
      setToastMessage({
        type: 'error',
        title: 'Frete Não Selecionado',
        message: 'Por favor, selecione uma opção de frete antes de finalizar a compra.'
      })
      setShowToast(true)
      return
    }

    setIsProcessing(true)
    
    try {
      // Preparar dados para o Mercado Pago
      const orderData = {
        items: items.map(item => ({
          name: item.name,
          brand: item.brand,
          size: item.size,
          quantity: item.quantity,
          price: item.price
        })),
        total: finalTotal,
        buyerData: buyerData,
        shipping: {
          cost: shippingCost,
          method: selectedShipping,
          days: shippingDays
        }
      }

      // Chamar API do Mercado Pago
      const response = await fetch('/api/mercadopago/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      })

      if (!response.ok) {
        throw new Error('Erro ao processar pagamento')
      }

      const paymentData = await response.json()

      if (paymentData.success) {
        // Salvar dados do pedido
        localStorage.setItem('lastOrder', JSON.stringify({
          ...orderData,
          orderId: paymentData.orderId,
          preferenceId: paymentData.preferenceId
        }))

        // Redirecionar para o Mercado Pago
        window.location.href = paymentData.paymentUrl
      } else {
        throw new Error(paymentData.error || 'Erro ao gerar pagamento')
      }

    } catch (error) {
      console.error('Erro no checkout:', error)
      setToastMessage({
        type: 'error',
        title: 'Erro no Pagamento',
        message: 'Não foi possível processar seu pagamento. Tente novamente.'
      })
      setShowToast(true)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleCheckoutWithLucas = () => {
    // Preparar dados para enviar ao Lucas
    const orderData = {
      items: items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity
      })),
      total: totalPrice,
      buyerData: buyerData
    }
    
    // Salvar dados para o Lucas
    localStorage.setItem('lucasOrderData', JSON.stringify(orderData))
    
    // Mostrar toast de sucesso
    setToastMessage({
      type: 'success',
      title: 'Conectando com Lucas',
      message: 'Abrindo chat para finalizar sua compra...'
    })
    setShowToast(true)
    
    // Abrir chat do Lucas
    const chatButton = document.querySelector('[aria-label="Abrir chat com Lucas"]') as HTMLButtonElement
    if (chatButton) {
      chatButton.click()
      
      // Enviar mensagem inicial para o Lucas
      setTimeout(() => {
        const inputEvent = new CustomEvent('sendMessageToLucas', {
          detail: 'Olá Lucas! Gostaria de finalizar minha compra. Tenho um carrinho com ' + totalItems + ' itens no valor total de R$ ' + totalPrice.toFixed(2)
        })
        window.dispatchEvent(inputEvent)
      }, 1000)
    }
    
    // Fechar toast após 3 segundos
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Seu carrinho está vazio</h1>
            <p className="text-gray-600 mb-8">Adicione produtos para continuar comprando</p>
            <Link href="/">
              <Button className="bg-red-600 hover:bg-red-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ver Produtos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continuar Comprando
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Meu Carrinho</h1>
          <p className="text-gray-600 mt-2">Revise seus itens e finalize sua compra</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Produtos ({totalItems} itens)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="relative p-4 border rounded-lg">
                    {/* Botão Remover no canto superior direito */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 text-red-600 hover:text-red-700"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    
                    <div className="flex gap-4">
                      <img 
                        src="https://z-cdn-media.chatglm.cn/files/c2b815eb-6d05-4ac0-b508-2151d214a6d8_bfgoodrich-all-terrain-t-a-ko3-12277121.jpg?auth_key=1792873501-b4c147edd58f43b3858fed4791450783-0-84f9137615fdf6aceeba74641aec8565"
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.brand} • {item.size}</p>
                        <p className="text-lg font-bold text-red-600 mt-2">R$ {(item.price || 0).toFixed(2)}</p>
                        
                        <div className="flex items-center gap-2 mt-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                          <span className="text-sm text-gray-600 ml-2">
                            Total: R$ {((item.price || 0) * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Buyer Data */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Dados do Comprador
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <Input
                      value={buyerData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
                    <Input
                      value={buyerData.cpf}
                      onChange={(e) => handleInputChange('cpf', e.target.value)}
                      placeholder="000.000.000-00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <Input
                      type="email"
                      value={buyerData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <Input
                      value={buyerData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Endereço de Entrega</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Rua</label>
                      <Input
                        value={buyerData.address.street}
                        onChange={(e) => handleInputChange('address.street', e.target.value)}
                        placeholder="Nome da rua"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                      <Input
                        value={buyerData.address.number}
                        onChange={(e) => handleInputChange('address.number', e.target.value)}
                        placeholder="123"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
                      <Input
                        value={buyerData.address.neighborhood}
                        onChange={(e) => handleInputChange('address.neighborhood', e.target.value)}
                        placeholder="Centro"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                      <Input
                        value={buyerData.address.city}
                        onChange={(e) => handleInputChange('address.city', e.target.value)}
                        placeholder="Xanxerê"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                      <Input
                        value={buyerData.address.state}
                        onChange={(e) => handleInputChange('address.state', e.target.value)}
                        placeholder="SC"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                      <Input
                        value={buyerData.address.zipCode}
                        onChange={(e) => handleInputChange('address.zipCode', e.target.value)}
                        placeholder="89820-000"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>R$ {totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Frete</span>
                    <span className={shippingCost === 0 ? 'text-green-600' : 'text-gray-600'}>
                      {shippingCost === 0 ? 'Grátis' : `R$ ${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Desconto</span>
                      <span>-R$ {discount.toFixed(2)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-red-600">R$ {finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Opções de Frete */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Opções de Entrega
                  </h4>
                  <div className="space-y-2">
                    {/* Opção 1 - Retirada */}
                    <div 
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        selectedShipping === 'retirada' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => selectShipping('retirada')}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="shipping"
                              checked={selectedShipping === 'retirada'}
                              onChange={() => selectShipping('retirada')}
                              className="text-blue-600"
                            />
                            <span className="font-medium text-gray-900">Opção 1</span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1 ml-6">
                            Retirada nosso CD XANXERÊ - SC
                          </p>
                          <p className="text-sm text-gray-600 ml-6">
                            R$ 00,00
                          </p>
                          <p className="text-xs text-green-600 ml-6">
                            2 dias úteis retirada
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Opção 2 - Jadlog */}
                    <div 
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        selectedShipping === 'jadlog' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => selectShipping('jadlog')}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="shipping"
                              checked={selectedShipping === 'jadlog'}
                              onChange={() => selectShipping('jadlog')}
                              className="text-blue-600"
                            />
                            <span className="font-medium text-gray-900">ou em alternativa:</span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1 ml-6">
                            Frete Convênio Jadlog Express
                          </p>
                          <p className="text-sm text-gray-600 ml-6">
                            R$ 139,00
                          </p>
                          <p className="text-xs text-blue-600 ml-6">
                            5 a 7 dias úteis entrega
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Opção 3 - Rodonaves */}
                    <div 
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        selectedShipping === 'rodonaves' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => selectShipping('rodonaves')}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="shipping"
                              checked={selectedShipping === 'rodonaves'}
                              onChange={() => selectShipping('rodonaves')}
                              className="text-blue-600"
                            />
                            <span className="font-medium text-gray-900">ou</span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1 ml-6">
                            Frete Expresso RTE RODONAVES
                          </p>
                          <p className="text-sm text-gray-600 ml-6">
                            R$ 244,90
                          </p>
                          <p className="text-xs text-blue-600 ml-6">
                            2 a 4 dias úteis entrega
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {selectedShipping && (
                    <div className="text-sm text-green-600 font-medium p-2 bg-green-50 rounded">
                      ✅ {selectedShipping === 'retirada' ? 'Retirada em Xanxerê-SC' : 'Entrega selecionada'} - {shippingDays}
                    </div>
                  )}
                </div>

                {/* Cupom de Desconto */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Cupom de Desconto
                  </h4>
                  <div className="flex gap-2">
                    <Input
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      placeholder="Digite o código do cupom"
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      onClick={applyCoupon}
                      disabled={couponLoading || !couponCode}
                      className="whitespace-nowrap"
                    >
                      {couponLoading ? 'Aplicando...' : 'Aplicar'}
                    </Button>
                  </div>
                  {discount > 0 && (
                    <div className="text-sm text-green-600 font-medium">
                      Desconto aplicado: R$ {discount.toFixed(2)}
                    </div>
                  )}
                  <div className="text-xs text-gray-500 bg-blue-50 p-2 rounded">
                    💡 Cupons disponíveis serão comunicados por um vendedor se aplicável
                  </div>
                </div>

                <Separator />

                {/* Checkout Buttons */}
                <div className="space-y-3">
                  <Button 
                    onClick={handleCheckout}
                    disabled={isProcessing || !buyerData.name || !buyerData.email || !buyerData.phone || !selectedShipping}
                    className="w-full bg-[#FFE600] hover:bg-[#FEDD00] text-black font-semibold py-3 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg border border-[#F0C419]"
                  >
                    {isProcessing ? 'Processando...' : 'Finalizar Compra'}
                  </Button>
                  
                  <Button 
                    onClick={handleCheckoutWithLucas}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <LucasAvatar size="sm" className="mr-2" />
                    Concluir a Compra com o Lucas
                  </Button>
                </div>

                {/* Security Badge */}
                <div className="text-center text-xs text-gray-500">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span>Compra 100% Segura</span>
                  </div>
                  <p>Dados protegidos por criptografia SSL</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <Toast
          type={toastMessage.type}
          title={toastMessage.title}
          message={toastMessage.message}
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  )
}