'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { XCircle, Home, ArrowLeft, RefreshCw } from 'lucide-react'

export default function PaymentFailurePage() {
  const router = useRouter()

  useEffect(() => {
    // Aqui você poderia registrar a falha do pagamento
    const urlParams = new URLSearchParams(window.location.search)
    const paymentId = urlParams.get('payment_id')
    const preferenceId = urlParams.get('preference_id')
    
    if (paymentId) {
      console.log('Pagamento falhou:', { paymentId, preferenceId })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl text-red-600">Pagamento Falhou</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 mb-2">
                Não foi possível processar seu pagamento.
              </p>
              <p className="text-sm text-gray-500">
                Você pode tentar novamente ou escolher outra forma de pagamento.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Possíveis causas:</strong>
                </p>
                <ul className="text-xs text-yellow-700 mt-2 text-left list-disc list-inside">
                  <li>Cartão recusado pela operadora</li>
                  <li>Dados incorretos do cartão</li>
                  <li>Limite de crédito insuficiente</li>
                  <li>Problemas de conexão</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <Button 
                onClick={() => router.push('/carrinho')}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Tentar Novamente
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => router.push('/')}
                className="w-full"
              >
                <Home className="w-4 h-4 mr-2" />
                Voltar para a Loja
              </Button>
            </div>

            <div className="text-xs text-gray-500">
              <p>• Se o problema persistir, entre em contato com seu banco</p>
              <p>• Você também pode tentar outra forma de pagamento</p>
              <p>• Para ajuda, entre em contato conosco</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}