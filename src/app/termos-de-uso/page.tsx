import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'
import { FileText, AlertCircle, CheckCircle, Gavel, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termos de Uso - SC PNEUS',
  description: 'Termos de uso e condições gerais do site SC PNEUS. Conheça as regras para utilização de nossos serviços e compra de pneus BFGoodrich.',
  openGraph: {
    title: 'Termos de Uso - SC PNEUS',
    description: 'Condições gerais para uso de nossos serviços.',
  },
}

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Termos de <span className="text-primary">Uso</span>
            </h1>
            <p className="text-lg text-gray-600">
              Condições gerais para utilização dos serviços SC PNEUS
            </p>
          </div>

          {/* Aceitação dos Termos */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Aceitação dos Termos</h2>
              <p className="opacity-90 leading-relaxed">
                Ao acessar e utilizar o site www.scpneus.com.br e/ou adquirir nossos produtos, 
                você concorda integralmente com estes Termos de Uso. Se não concordar com qualquer 
                parte destes termos, não utilize nossos serviços.
              </p>
            </div>
          </section>

          {/* Descrição dos Serviços */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              Descrição dos Serviços
            </h2>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <div className="space-y-4 text-gray-700">
                <p>
                  A SC PNEUS oferece os seguintes serviços através de seu site:
                </p>
                
                <ul className="space-y-2 ml-4">
                  <li>• Venda de pneus novos, especialmente da marca BFGoodrich</li>
                  <li>• Informações detalhadas sobre produtos e especificações técnicas</li>
                  <li>• Sistema de compras online com pagamento seguro</li>
                  <li>• Entrega em todo território brasileiro</li>
                  <li>• Suporte técnico e atendimento ao cliente</li>
                  <li>• Serviços de instalação através de parceiros autorizados</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Responsabilidades do Usuário */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Responsabilidades do Usuário</h2>
            
            <div className="space-y-4">
              {[
                { title: 'Veracidade das Informações', desc: 'Fornecer informações verdadeiras, completas e atualizadas.' },
                { title: 'Uso Adequado', desc: 'Utilizar o site para fins legais e lícitos.' },
                { title: 'Segurança da Conta', desc: 'Manter confidenciais seus dados de acesso.' },
                { title: 'Compliance', desc: 'Cumprir todas as leis e regulamentações aplicáveis.' },
                { title: 'Comunicação', desc: 'Manter seus dados de contato atualizados.' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Restrições de Uso */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
              Restrições de Uso
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="space-y-4 text-gray-700">
                <p>
                  É estritamente proibido:
                </p>
                
                <ul className="space-y-2 ml-4">
                  <li>• Utilizar o site para atividades fraudulentas ou ilícitas</li>
                  <li>• Tentar acessar áreas restritas ou sistemas não autorizados</li>
                  <li>• Copiar, reproduzir ou distribuir conteúdo sem autorização</li>
                  <li>• Inserir vírus, malware ou códigos maliciosos</li>
                  <li>• Realizar compras com informações falsas ou de terceiros</li>
                  <li>• Utilizar robôs ou scrapers para coleta de dados</li>
                  <li>• Prejudicar o funcionamento do site ou servidores</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Propriedade Intelectual */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Propriedade Intelectual</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <div className="space-y-4 text-gray-700">
                <p>
                  Todo o conteúdo deste site, incluindo但不限于:
                </p>
                
                <ul className="space-y-2 ml-4">
                  <li>• Textos, imagens, vídeos e áudios</li>
                  <li>• Design, layout e interface</li>
                  <li>• Marcas, logos e nomes comerciais</li>
                  <li>• Códigos-fonte e tecnologias</li>
                  <li>• Banco de dados e informações</li>
                </ul>
                
                <p className="mt-4 font-semibold">
                  São de propriedade exclusiva da SC PNEUS ou de seus licenciadores, 
                  protegidos pelas leis de direitos autorais e propriedade intelectual.
                </p>
              </div>
            </div>
          </section>

          {/* Preços e Pagamento */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Preços e Pagamento</h2>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Preços</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Os preços estão em Reais (BRL) e incluem impostos aplicáveis</li>
                    <li>• Preços podem ser alterados sem aviso prévio</li>
                    <li>• Erros de preço serão corrigidos e cliente notificado</li>
                    <li>• Não nos responsabilizamos por erros tipográficos</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Formas de Pagamento</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Cartão de crédito (até 12x sem juros em condições especiais)</li>
                    <li>• Pix (pagamento instantâneo com desconto)</li>
                    <li>• Boleto bancário (pagamento em até 3 dias)</li>
                    <li>• Transferência bancária</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Segurança</h3>
                  <p className="text-sm">
                    Todas as transações são processadas por gateways de pagamento certificados 
                    e utilizam criptografia SSL para proteger seus dados financeiros.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Entrega e Logística */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Entrega e Logística</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
              <div className="space-y-4 text-gray-700">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Prazos de Entrega</h3>
                  <p className="text-sm">
                    Os prazos informados são estimativas e podem variar conforme localização 
                    e condições logísticas. Consulte nossa Política de Entrega para detalhes.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Responsabilidade</h3>
                  <p className="text-sm">
                    A responsabilidade pela entrega é transferida ao cliente no momento 
                    da assinatura do recebimento. Verifique o produto antes de aceitar.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Endereço de Entrega</h3>
                  <p className="text-sm">
                    O cliente é responsável por fornecer endereço correto e completo. 
                    Custos adicionais por endereço incorreto serão de responsabilidade do cliente.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Garantia e Suporte */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Garantia e Suporte</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <div className="space-y-4 text-gray-700">
                <p>
                  Todos os produtos possuem garantia do fabricante conforme especificado 
                  em cada produto. Consulte nossa Política de Garantia para:
                </p>
                
                <ul className="space-y-2 ml-4">
                  <li>• Prazos e condições de garantia</li>
                  <li>• Procedimentos para solicitação</li>
                  <li>• Defeitos cobertos e não cobertos</li>
                  <li>• Documentação necessária</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitação de Responsabilidade */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Gavel className="w-6 h-6 text-primary mr-3" />
              Limitação de Responsabilidade
            </h2>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="space-y-4 text-gray-700">
                <p>
                  Na máxima extensão permitida por lei:
                </p>
                
                <ul className="space-y-2 ml-4">
                  <li>• O site é fornecido "como está" sem garantias de qualquer tipo</li>
                  <li>• Não nos responsabilizamos por danos indiretos ou consequentes</li>
                  <li>• Nossa responsabilidade total limita-se ao valor da compra</li>
                  <li>• Não garantimos disponibilidade ininterrupta do site</li>
                  <li>• Não somos responsáveis por conteúdo de sites terceiros</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Privacidade */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Privacidade e Proteção de Dados</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <p className="text-gray-700">
                Sua privacidade é importante para nós. O tratamento de seus dados pessoais 
                está em conformidade com nossa Política de Privacidade e a Lei Geral de 
                Proteção de Dados (LGPD). Ao utilizar nossos serviços, você concorda com 
                a coleta e processamento de seus dados conforme descrito em nossa política.
              </p>
            </div>
          </section>

          {/* Resolução de Disputas */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Resolução de Disputas</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
              <div className="space-y-4 text-gray-700">
                <p>
                  Qualquer disputa decorrente destes Termos de Uso será resolvida da seguinte forma:
                </p>
                
                <ol className="space-y-2 ml-4 list-decimal">
                  <li>Tentativa de resolução amigável entre as partes</li>
                  <li>Mediação junto a órgãos de defesa do consumidor</li>
                  <li>Se necessário, competência do Foro da Comarca de Xanxerê, SC</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Contato */}
          <section className="bg-primary text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Dúvidas sobre os Termos?</h2>
            <p className="text-center mb-8 opacity-90">
              Entre em contato conosco para esclarecer qualquer questão sobre estes termos
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
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">E-mail</div>
                  <div className="text-sm opacity-90">contato@scpneus.shop</div>
                </div>
              </div>
            </div>
          </section>

          {/* Rodapé dos Termos */}
          <section className="mt-12 text-center text-gray-600">
            <p className="text-sm">
              <strong>Última atualização:</strong> 20 de janeiro de 2025<br />
              <strong>Versão:</strong> 1.0<br />
              Estes Termos de Uso regem o uso do site www.scpneus.com.br e todos os serviços 
              oferecidos pela SC PNEUS DISTRIBUIDORA, CNPJ: 17.474.116/0001-65.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}