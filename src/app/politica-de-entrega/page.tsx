import { Metadata } from 'next'
import { Truck, Clock, Shield, MapPin, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Entrega - SC PNEUS',
  description: 'Conheça nossa política de entrega para todo Brasil. Prazos, custos e condições para envio de pneus BFGoodrich.',
  openGraph: {
    title: 'Política de Entrega - SC PNEUS',
    description: 'Entrega rápida e segura para todo Brasil.',
  },
}

export default function PoliticaEntrega() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Truck className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Política de <span className="text-primary">Entrega</span>
          </h1>
          <p className="text-lg text-gray-600">
            Entrega rápida e segura para todo Brasil com a qualidade SC PNEUS
          </p>
        </div>

        {/* Prazos de Entrega */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <Clock className="w-6 h-6 text-primary mr-3" />
            Prazos de Entrega
          </h2>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Região Sul</h3>
                  <p className="text-gray-600">2 a 5 dias úteis após confirmação do pagamento</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Região Sudeste</h3>
                  <p className="text-gray-600">3 a 7 dias úteis após confirmação do pagamento</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Região Centro-Oeste</h3>
                  <p className="text-gray-600">4 a 8 dias úteis após confirmação do pagamento</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Região Norte e Nordeste</h3>
                  <p className="text-gray-600">5 a 10 dias úteis após confirmação do pagamento</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custos de Envio */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Custos de Envio</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="space-y-4">
              <p className="text-gray-700 mb-4">
                O valor do frete é calculado automaticamente no carrinho de compras baseado em:
              </p>
              
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>CEP de destino</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Peso e volume dos produtos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Modalidade de entrega escolhida</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Frete Grátis:</strong> Para compras acima de R$ 2.000,00 em regiões 
                  selecionadas (consulte condições no carrinho).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modalidades de Entrega */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Modalidades de Entrega</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Truck className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-gray-900">Entrega Padrão</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Entrega em endereço residencial ou comercial via transportadora conveniada.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Prazo conforme tabela regional</li>
                <li>• Acompanhamento online</li>
                <li>• Seguro contra perdas</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-gray-900">Retira na Loja</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Retire seu pedido em nossa loja em Xanxerê, SC sem custo de envio.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Disponível em 24h após aprovação</li>
                <li>• Sem custo adicional</li>
                <li>• Pagamento na retirada</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Processo de Envio */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Processo de Envio</h2>
          
          <div className="space-y-4">
            {[
              { step: '1', title: 'Confirmação do Pedido', desc: 'Após aprovação do pagamento, seu pedido é processado em até 24h úteis.' },
              { step: '2', title: 'Separação', desc: 'Nossa equipe separa os produtos com cuidado e verifica a qualidade.' },
              { step: '3', title: 'Embalagem', desc: 'Produtos são embalados com segurança para evitar danos durante o transporte.' },
              { step: '4', title: 'Envio', desc: 'Pedido é enviado à transportadora e você recebe o código de rastreamento.' },
              { step: '5', title: 'Entrega', desc: 'Produto é entregue no endereço informado com assinatura do recebedor.' },
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

        {/* Informações Importantes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Informações Importantes</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">!</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recebimento do Produto</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Verifique a integridade da embalagem antes de assinar o recebimento</li>
                    <li>• Anote qualquer dano visível no canhoto da transportadora</li>
                    <li>• Tire fotos do produto danificado se necessário</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">!</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Endereço de Entrega</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Certifique-se de que o endereço está completo e correto</li>
                    <li>• Alguém deve estar presente para receber o produto</li>
                    <li>• Mudanças de endereço devem ser solicitadas antes do envio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="bg-primary text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Dúvidas sobre Entrega?</h2>
          <p className="text-center mb-8 opacity-90">
            Nossa equipe está pronta para ajudar com qualquer questão sobre seu pedido
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
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="font-semibold">Retira na Loja</div>
                <div className="text-sm opacity-90">Rua Luiz Bagatini, 581 - Xanxerê/SC</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}