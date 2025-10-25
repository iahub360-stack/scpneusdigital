'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Home, ArrowLeft, CheckCircle } from 'lucide-react'

export default function PaymentPendingPage() {
  const router = useRouter()

  useEffect(() => {
    // Aqui você poderia registrar o pagamento pendente
    const urlParams = new URLSearchParams(window.location.search)
    const paymentId = urlParams.get('payment_id')
    const preferenceId = urlParams.get('preference_id')
    
    if (paymentId) {
      console.log('Pagamento pendente:', { paymentId, preferenceId })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
            <CardTitle className="text-2xl text-yellow-600">Pagamento em Processamento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 mb-2">
                Seu pagamento está sendo processado.
              </p>
              <p className="text-sm text-gray-500">
                Você receberá um e-mail assim que o pagamento for aprovado.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 font-medium mb-2">
                  O que acontece agora?
                </p>
                <ul className="text-xs text-blue-700 text-left space-y-1">
                  <li>• Se pagou com boleto, pode levar até 3 dias úteis</li>
                  <li>• Se pagou com PIX, a aprovação é rápida</li>
                  <li>• Se pagou com cartão, estamos aguardando confirmação</li>
                  <li>• Você receberá um e-mail com a confirmação</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <Button 
                onClick={() => router.push('/')}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                <Home className="w-4 h-4 mr-2" />
                Continuar Comprando
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => router.push('/meus-pedidos')}
                className="w-full"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Acompanhar Pedido
              </Button>
            </div>

            <div className="text-xs text-gray-500">
              <p>• Guarde seu comprovante de pagamento</p>
              <p>• Verifique seu e-mail e spancas</p>
              <p>• Para ajuda, entre em contato conosco</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}