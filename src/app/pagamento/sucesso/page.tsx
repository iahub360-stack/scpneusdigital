'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Home, Package, ArrowLeft } from 'lucide-react'

export default function PaymentSuccessPage() {
  const router = useRouter()
  const [orderInfo, setOrderInfo] = useState<any>(null)

  useEffect(() => {
    // Limpar carrinho e dados do pedido
    localStorage.removeItem('cart')
    localStorage.removeItem('orderData')
    
    // Aqui você poderia buscar os detalhes do pedido na API
    // usando os parâmetros da URL (payment_id, preference_id, etc.)
    const urlParams = new URLSearchParams(window.location.search)
    const paymentId = urlParams.get('payment_id')
    const preferenceId = urlParams.get('preference_id')
    
    if (paymentId) {
      // Buscar detalhes do pagamento
      fetchOrderDetails(paymentId)
    }
  }, [])

  const fetchOrderDetails = async (paymentId: string) => {
    try {
      const response = await fetch(`/api/mercadopago/payment-details?payment_id=${paymentId}`)
      if (response.ok) {
        const data = await response.json()
        setOrderInfo(data)
      }
    } catch (error) {
      console.error('Erro ao buscar detalhes do pagamento:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-600">Pagamento Aprovado!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 mb-2">
                Seu pagamento foi processado com sucesso.
              </p>
              <p className="text-sm text-gray-500">
                {orderInfo ? (
                  <>Pedido #{orderInfo.id} - {orderInfo.status}</>
                ) : (
                  'Você receberá um e-mail com os detalhes do seu pedido.'
                )}
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Package className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Seu pedido será processado e você receberá atualizações por e-mail.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <Button 
                onClick={() => router.push('/')}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                <Home className="w-4 h-4 mr-2" />
                Voltar para a Loja
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => router.push('/meus-pedidos')}
                className="w-full"
              >
                <Package className="w-4 h-4 mr-2" />
                Meus Pedidos
              </Button>
            </div>

            <div className="text-xs text-gray-500">
              <p>• Em caso de dúvidas, entre em contato conosco</p>
              <p>• O prazo de entrega começa após a aprovação do pagamento</p>
              <p>• Você pode acompanhar seu pedido pelo e-mail cadastrado</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}