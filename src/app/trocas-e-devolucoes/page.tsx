import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'
import { RotateCcw, Clock, CheckCircle, AlertCircle, Phone, Package, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trocas e Devoluções - SC PNEUS',
  description: 'Política de trocas e devoluções da SC PNEUS. Conheça nossos prazos e condições para devolução de pneus BFGoodrich.',
  openGraph: {
    title: 'Trocas e Devoluções - SC PNEUS',
    description: 'Política clara e transparente para sua tranquilidade.',
  },
}

export default function TrocasDevolucoes() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <RotateCcw className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Trocas e <span className="text-primary">Devoluções</span>
            </h1>
            <p className="text-lg text-gray-600">
              Política clara e transparente para sua tranquilidade na compra
            </p>
          </div>

          {/* Prazos Principais */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">7 dias</div>
              <div className="text-xl mb-4">para Arrependimento</div>
              <p className="opacity-90 max-w-2xl mx-auto">
                De acordo com o Código de Defesa do Consumidor, você tem 7 dias corridos 
                após o recebimento para desistir da compra, sem custo algum.
              </p>
            </div>
          </section>

          {/* Quando pode Trocar/Devolver */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              Quando pode Trocar/Devolver
            </h2>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Arrependimento</h3>
                    <p className="text-gray-600">Mudou de ideia em até 7 dias após o recebimento.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Produto Errado</h3>
                    <p className="text-gray-600">Recebeu um produto diferente do que comprou.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Defeito de Fabricação</h3>
                    <p className="text-gray-600">Produto com defeito identificado no primeiro uso.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Danos no Transporte</h3>
                    <p className="text-gray-600">Produto chegou danificado pela transportadora.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quando Não pode Trocar/Devolver */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
              Quando Não pode Trocar/Devolver
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Prazo Expirado</h3>
                    <p className="text-gray-600">Após 7 dias do recebimento para arrependimento.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Produto Usado</h3>
                    <p className="text-gray-600">Pneu que já foi montado ou rodou no veículo.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Danos por Uso</h3>
                    <p className="text-gray-600">Cortes, perfurações ou danos por uso inadequado.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Embalagem Danificada</h3>
                    <p className="text-gray-600">Produto sem embalagem original ou com danos.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Como Solicitar */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Como Solicitar a Troca/Devolução</h2>
            
            <div className="space-y-4">
              {[
                { step: '1', title: 'Entre em Contato', desc: 'Ligue ou envie e-mail para nossa equipe dentro do prazo de 7 dias.' },
                { step: '2', title: 'Informações do Pedido', desc: 'Tenha em mãos número do pedido, nota fiscal e motivo da devolução.' },
                { step: '3', title: 'Autorização', desc: 'Aguarde nossa autorização e instruções de envio.' },
                { step: '4', title: 'Envio do Produto', desc: 'Embalar o produto adequadamente e enviar conforme instruções.' },
                { step: '5', title: 'Processamento', desc: 'Após recebimento, processaremos em até 5 dias úteis.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Condições do Produto */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Package className="w-6 h-6 text-primary mr-3" />
              Condições do Produto
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Embalagem Original</h3>
                    <p className="text-sm">Produto deve estar na embalagem original, sem danos.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sem Uso</h3>
                    <p className="text-sm">Pneu não pode ter sido montado ou utilizado.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Etiquetas Intactas</h3>
                    <p className="text-sm">Etiquetas e códigos de barras devem estar preservados.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Acessórios</h3>
                    <p className="text-sm">Todos os acessórios e manuais devem ser incluídos.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reembolso */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <CreditCard className="w-6 h-6 text-primary mr-3" />
              Reembolso
            </h2>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Prazo de Reembolso</h3>
                  <p className="text-gray-600">
                    O reembolso será processado em até 10 dias corridos após a aprovação da devolução.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Formas de Reembolso</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• <strong>Cartão de Crédito:</strong> Estorno na fatura seguinte (pode levar até 2 faturas)</p>
                    <p>• <strong>Pix/Transferência:</strong> Até 2 dias úteis após aprovação</p>
                    <p>• <strong>Boleto:</strong> Reembolso via Pix ou transferência bancária</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Custos de Envio</h3>
                  <p className="text-gray-600">
                    Para devoluções por arrependimento, o custo de envio é por conta do cliente. 
                    Em caso de defeito ou erro nosso, arcaremos com todos os custos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Troca por Produto Diferente */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Troca por Produto Diferente</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
              <div className="space-y-4 text-gray-700">
                <p>
                  Se preferir trocar por um produto diferente, siga o mesmo processo de devolução 
                  e realize uma nova compra. Os valores serão ajustados conforme:
                </p>
                
                <ul className="space-y-2 ml-4">
                  <li>• Produto mais caro: Complemente a diferença</li>
                  <li>• Produto mais barato: Receba o crédito ou reembolso da diferença</li>
                  <li>• Mesmo valor: Troca direta sem custos adicionais</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contato */}
          <section className="bg-primary text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Precisa de Ajuda com Troca/Devolução?</h2>
            <p className="text-center mb-8 opacity-90">
              Nossa equipe está pronta para ajudar em todo o processo de devolução
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Telefone</div>
                  <div className="text-sm opacity-90">(49) 3436-1447</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Package className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">E-mail</div>
                  <div className="text-sm opacity-90">devolucoes@scpneus.com.br</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}