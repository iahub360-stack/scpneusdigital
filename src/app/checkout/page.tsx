'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Truck, Store, Tag, ShoppingCart, ArrowLeft, CreditCard, QrCode, BarChart3 } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface OrderData {
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
    image: string
    brand: string
    size: string
  }>
  buyer: {
    name: string
    address: string
    cep: string
    city: string
    state: string
    phone: string
    email: string
    cpfCnpj: string
  }
  shipping: string
  pickupDate?: Date
  pickupTime?: string
  coupon: string
  subtotal: number
  discount: number
  shipping: number
  total: number
}

export default function CheckoutPage() {
  const router = useRouter()
  const [orderData, setOrderData] = useState<OrderData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [paymentUrl, setPaymentUrl] = useState<string>('')

  useEffect(() => {
    // Carregar dados do pedido do localStorage
    const savedOrder = localStorage.getItem('orderData')
    if (savedOrder) {
      const data = JSON.parse(savedOrder)
      // Converter pickupDate de volta para Date se existir
      if (data.pickupDate) {
        data.pickupDate = new Date(data.pickupDate)
      }
      setOrderData(data)
    } else {
      // Redirecionar para o carrinho se não houver dados do pedido
      router.push('/carrinho')
    }
  }, [router])

  const handleMercadoPagoPayment = async () => {
    if (!orderData) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/mercadopago/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      })

      if (response.ok) {
        const data = await response.json()
        if (data.init_point) {
          // Redirecionar para o checkout do Mercado Pago
          window.location.href = data.init_point
        } else {
          alert('Erro ao gerar link de pagamento')
        }
      } else {
        alert('Erro ao processar pagamento')
      }
    } catch (error) {
      console.error('Erro ao criar pagamento:', error)
      alert('Erro ao processar pagamento')
    } finally {
      setIsLoading(false)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const getShippingDescription = () => {
    if (!orderData) return ''
    
    if (orderData.shipping === 'pickup') {
      return `Retirar na loja - ${format(orderData.pickupDate!, "dd 'de' MMMM 'às' HH:mm", { locale: ptBR })}`
    }
    
    const shippingOptions = {
      'pac_norte': 'PAC - 10 dias úteis',
      'sedex_norte': 'SEDEX - 5 dias úteis',
      'pac_centro': 'PAC - 7 dias úteis',
      'sedex_centro': 'SEDEX - 3 dias úteis',
      'pac_sudeste': 'PAC - 5 dias úteis',
      'sedex_sudeste': 'SEDEX - 2 dias úteis',
      'pac_sul': 'PAC - 6 dias úteis',
      'sedex_sul': 'SEDEX - 3 dias úteis',
      'proprio': 'Transporte Próprio - 4 dias úteis'
    }
    
    return shippingOptions[orderData.shipping as keyof typeof shippingOptions] || 'Entrega padrão'
  }

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p>Carregando dados do pedido...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="outline" 
            onClick={() => router.back()}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Finalizar Pedido</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna Esquerda - Resumo do Pedido */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Itens do Pedido */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Resumo dos Itens
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.brand} • {item.size}</p>
                      <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-red-600">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                      <p className="text-sm text-gray-600">
                        {formatCurrency(item.price)} cada
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Dados de Entrega */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {orderData.shipping === 'pickup' ? <Store className="h-5 w-5" /> : <Truck className="h-5 w-5" />}
                  Informações de Entrega
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900 mb-2">
                    {orderData.shipping === 'pickup' ? 'Retirada na Loja' : 'Endereço de Entrega'}
                  </p>
                  
                  {orderData.shipping === 'pickup' ? (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <strong>Data:</strong> {format(orderData.pickupDate!, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Horário:</strong> {orderData.pickupTime}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Local:</strong> SC PNEUS - Distribuidora
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {orderData.buyer.name && (
                        <p className="text-sm text-gray-600">
                          <strong>Destinatário:</strong> {orderData.buyer.name}
                        </p>
                      )}
                      {orderData.buyer.address && (
                        <p className="text-sm text-gray-600">
                          <strong>Endereço:</strong> {orderData.buyer.address}
                        </p>
                      )}
                      {(orderData.buyer.cep || orderData.buyer.city || orderData.buyer.state) && (
                        <p className="text-sm text-gray-600">
                          <strong>CEP/Cidade/Estado:</strong> {[
                            orderData.buyer.cep,
                            orderData.buyer.city,
                            orderData.buyer.state
                          ].filter(Boolean).join(' - ')}
                        </p>
                      )}
                      <p className="text-sm text-gray-600">
                        <strong>Tipo de Entrega:</strong> {getShippingDescription()}
                      </p>
                    </div>
                  )}
                </div>

                {/* Dados de Contato */}
                {(orderData.buyer.phone || orderData.buyer.email) && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900 mb-2">Dados de Contato</p>
                    <div className="space-y-2">
                      {orderData.buyer.phone && (
                        <p className="text-sm text-gray-600">
                          <strong>Telefone:</strong> {orderData.buyer.phone}
                        </p>
                      )}
                      {orderData.buyer.email && (
                        <p className="text-sm text-gray-600">
                          <strong>E-mail:</strong> {orderData.buyer.email}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Métodos de Pagamento */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Método de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Você será redirecionado para o ambiente seguro do Mercado Pago para finalizar o pagamento.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <CreditCard className="h-8 w-8 text-blue-600 mb-2" />
                      <span className="text-sm font-medium">Cartão de Crédito</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <QrCode className="h-8 w-8 text-green-600 mb-2" />
                      <span className="text-sm font-medium">PIX</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <BarChart3 className="h-8 w-8 text-purple-600 mb-2" />
                      <span className="text-sm font-medium">Boleto</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna Direita - Resumo Financeiro */}
          <div className="space-y-6">
            
            {/* Cupom Aplicado */}
            {orderData.coupon && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="h-5 w-5" />
                    Cupom Aplicado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="font-medium text-green-800">{orderData.coupon}</p>
                    <p className="text-sm text-green-600">
                      {orderData.coupon === '10SCP' && '10% de desconto'}
                      {orderData.coupon === '20SCP' && '20% de desconto'}
                      {orderData.coupon === 'FRETESCP' && 'Frete grátis'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Resumo Financeiro */}
            <Card>
              <CardHeader>
                <CardTitle>Resumo Financeiro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatCurrency(orderData.subtotal)}</span>
                  </div>
                  
                  {orderData.discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto</span>
                      <span>-{formatCurrency(orderData.discount)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span>
                      {orderData.shipping === 0 ? 'Grátis' : formatCurrency(orderData.shipping)}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-red-600">{formatCurrency(orderData.total)}</span>
                  </div>
                </div>

                <Button 
                  onClick={handleMercadoPagoPayment}
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3"
                  size="lg"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processando...
                    </div>
                  ) : (
                    'Pagar com Mercado Pago'
                  )}
                </Button>
                
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Pagamento 100% seguro</p>
                  <p>• Aceitamos cartão, PIX e boleto</p>
                  <p>• Parcelamento em até 12x</p>
                </div>
              </CardContent>
            </Card>

            {/* Informações Adicionais */}
            <Card>
              <CardHeader>
                <CardTitle>Informações Importantes</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-gray-600 space-y-2">
                <p>• Após a confirmação do pagamento, seu pedido será processado.</p>
                <p>• Você receberá um e-mail com os detalhes da compra.</p>
                <p>• O prazo de entrega começa a contar após a aprovação do pagamento.</p>
                <p>• Em caso de retirada na loja, aguarde a confirmação por e-mail.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}