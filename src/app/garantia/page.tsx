import { Metadata } from 'next'
import { Shield, CheckCircle, AlertCircle, Clock, Phone, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Garantia - SC PNEUS',
  description: 'Garantia oficial BFGoodrich de 60.000 km. Conheça todos os termos e condições da garantia SC PNEUS.',
  openGraph: {
    title: 'Garantia - SC PNEUS',
    description: 'Garantia oficial de 60.000 km em todos os produtos BFGoodrich.',
  },
}

export default function Garantia() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Garantia <span className="text-primary">BFGoodrich</span>
          </h1>
          <p className="text-lg text-gray-600">
            Proteção e confiança para seus pneus off-road
          </p>
        </div>

        {/* Garantia Principal */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold mb-2">60.000 km</div>
            <div className="text-xl mb-4">de Garantia Oficial</div>
            <p className="opacity-90 max-w-2xl mx-auto">
              Todos os pneus BFGoodrich comercializados pela SC PNEUS possuem garantia 
              oficial do fabricante, cobrindo defeitos de fabricação por até 60.000 km.
            </p>
          </div>
        </section>

        {/* O que a Garantia Cobre */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            O que a Garantia Cobre
          </h2>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Defeitos de Fabricação</h3>
                  <p className="text-gray-600">Qualquer defeito originado no processo de fabricação do pneu.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Separação de Carcaças</h3>
                  <p className="text-gray-600">Separação entre as camadas estruturais do pneu.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Defeitos na Banda de Rodagem</h3>
                  <p className="text-gray-600">Problemas no desenho ou compostos da banda de rodagem.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Vazamentos na Estrutura</h3>
                  <p className="text-gray-600">Perda de ar por defeitos na estrutura interna do pneu.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O que a Garantia Não Cobre */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
            O que a Garantia Não Cobre
          </h2>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Danos por Uso Indevido</h3>
                  <p className="text-gray-600">Impactos, cortes, perfurações ou danos por objetos na pista.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Desgaste Normal</h3>
                  <p className="text-gray-600">Desgaste natural por uso regular nas condições previstas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Uso Incorreto</h3>
                  <p className="text-gray-600">Uso em condições para as quais o pneu não foi projetado.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Falta de Manutenção</h3>
                  <p className="text-gray-600">Danos por calibragem incorreta, alinhamento ou balanceamento.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Solicitar a Garantia */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Como Solicitar a Garantia</h2>
          
          <div className="space-y-4">
            {[
              { step: '1', title: 'Entre em Contato', desc: 'Ligue para nossa equipe ou visite nossa loja em Xanxerê, SC.' },
              { step: '2', title: 'Apresente Documentos', desc: 'Leve nota fiscal, comprovante de compra e pneu com defeito.' },
              { step: '3', title: 'Análise Técnica', desc: 'Nossa equipe fará uma análise inicial do defeito.' },
              { step: '4', title: 'Envio ao Fabricante', desc: 'Se necessário, enviaremos ao laboratório BFGoodrich.' },
              { step: '5', title: 'Resposta em 15 dias', desc: 'Receba o resultado da análise em até 15 dias úteis.' },
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

        {/* Documentos Necessários */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <FileText className="w-6 h-6 text-primary mr-3" />
            Documentos Necessários
          </h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Obrigatórios:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Nota fiscal original</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Comprovante de pagamento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Pneu com suposta falha</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Recomendados:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Fotos do defeito</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Histórico de manutenção</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Laudo do mecânico (se houver)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prazos e Condições */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <Clock className="w-6 h-6 text-primary mr-3" />
            Prazos e Condições
          </h2>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-4 text-gray-600">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Prazo de Garantia</h3>
                <p>60.000 km ou 5 anos, o que ocorrer primeiro, a partir da data de compra.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Análise de Defeito</h3>
                <p>Prazo de até 15 dias úteis para conclusão da análise técnica.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Substituição</h3>
                <p>Em caso de defeito coberto, o pneu será substituído por um novo equivalente.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Crédito Proporcional</h3>
                <p>Se o desgaste for inferior a 25%, será concedido crédito para nova compra.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="bg-primary text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Precisa de Ajuda com a Garantia?</h2>
          <p className="text-center mb-8 opacity-90">
            Nossa equipe especializada está pronta para auxiliar em todo o processo
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="font-semibold">Telefone Garantia</div>
                <div className="text-sm opacity-90">(49) 3436-1447</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="font-semibold">E-mail</div>
                <div className="text-sm opacity-90">garantia@scpneus.com.br</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}