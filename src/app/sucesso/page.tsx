'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowLeft, Truck, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  const router = useRouter()

  useEffect(() => {
    // Limpar dados temporários
    localStorage.removeItem('cart')
    localStorage.removeItem('buyerData')
    localStorage.removeItem('lucasOrderData')
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pedido Confirmado!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Seu pedido foi recebido com sucesso e está sendo processado.
          </p>

          {/* Order Details Card */}
          <Card className="max-w-2xl mx-auto mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Detalhes da Entrega
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Prazo de Entrega</h3>
                  <p className="text-gray-600">5 a 10 dias úteis</p>
                  <p className="text-sm text-gray-500">Após confirmação do pagamento</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Forma de Envio</h3>
                  <p className="text-gray-600">Transportadora</p>
                  <p className="text-sm text-gray-500">Rastreamento por e-mail</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Próximos Passos</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Você receberá um e-mail de confirmação</li>
                  <li>• Nossa equipe entrará em contato para confirmar dados</li>
                  <li>• O código de rastreamento será enviado por e-mail</li>
                  <li>• A entrega será feita no endereço informado</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="max-w-2xl mx-auto mb-8">
            <CardHeader>
              <CardTitle>Precisa de Ajuda?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-600">(49) 3436-1447</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">E-mail</p>
                    <p className="text-gray-600">contato@scpneus.shop</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-red-600 hover:bg-red-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para a Loja
              </Button>
            </Link>
            <Button 
              variant="outline"
              onClick={() => window.open('https://atendimento.scpneus.shop/chat', '_blank')}
            >
              Falar com o Lucas
            </Button>
          </div>

          {/* Thank You Message */}
          <div className="mt-12 p-6 bg-red-50 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-red-900 mb-3">Obrigado por comprar na SC PNEUS!</h2>
            <p className="text-red-800">
              Agradecemos sua confiança em nossos produtos e serviços. 
              Garantimos pneus BFGoodrich de alta qualidade com o melhor atendimento da região.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}