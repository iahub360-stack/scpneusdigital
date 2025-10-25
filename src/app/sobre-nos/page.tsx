import { Metadata } from 'next'
import { Shield, Award, Users, MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nós - SC PNEUS',
  description: 'Conheça a história da SC PNEUS, distribuidora autorizada BFGoodrich com mais de 15 anos de experiência em pneus off-road em Xanxerê, SC.',
  openGraph: {
    title: 'Sobre Nós - SC PNEUS',
    description: 'Mais de 15 anos de especialização em pneus off-road premium.',
  },
}

export default function SobreNos() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Sobre a <span className="text-primary">SC PNEUS</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de 15 anos transformando o mercado de pneus off-road no Brasil com qualidade, 
            confiança e atendimento diferenciado.
          </p>
        </div>

        {/* Nossa História */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossa História</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fundada em 2009, a SC PNEUS nasceu do sonho de oferecer produtos premium 
                  para o crescente mercado off-road brasileiro. Começamos como uma pequena loja 
                  em Xanxerê, Santa Catarina, e nos tornamos referência nacional em pneus 
                  especializados.
                </p>
                <p>
                  Em 2015, conquistamos a certificação de distribuidora autorizada BFGoodrich, 
                  um marco que consolidou nossa posição no mercado e nos permitiu oferecer 
                  produtos com garantia oficial e suporte completo aos clientes.
                </p>
                <p>
                  Hoje, atendemos clientes de todo o Brasil com uma equipe especializada, 
                  infraestrutura moderna e o compromisso de sempre oferecer o melhor em 
                  pneus off-road.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">15+</div>
                <div className="text-xl text-gray-700">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores e Missão */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Nossos Valores</h2>
            <p className="text-lg text-gray-600">Os princípios que guiam nosso negócio</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Qualidade</h3>
              <p className="text-gray-600">
                Trabalhamos apenas com produtos originais e certificados, 
                garantindo a máxima segurança e desempenho.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Atendimento</h3>
              <p className="text-gray-600">
                Nossa equipe está preparada para oferecer a melhor orientação 
                e suporte para escolher o pneu ideal.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Confiança</h3>
              <p className="text-gray-600">
                Construímos relações duradouras baseadas na transparência, 
                honestidade e compromisso com nossos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Nossa Equipe</h2>
            <p className="text-lg text-gray-600">Especialistas dedicados ao seu sucesso</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'João Silva', role: 'Diretor Comercial', experience: '15 anos' },
              { name: 'Maria Santos', role: 'Gerente de Produtos', experience: '12 anos' },
              { name: 'Carlos Oliveira', role: 'Especialista Técnico', experience: '10 anos' },
              { name: 'Ana Costa', role: 'Atendimento ao Cliente', experience: '8 anos' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-gray-500">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-sm text-gray-600">{member.experience} de experiência</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contato Rápido */}
        <section className="bg-primary text-white rounded-2xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Visite Nossa Loja</h2>
            <p className="text-lg opacity-90">
              Venha conhecer nossa estrutura e conversar com nossos especialistas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="font-semibold">Endereço</div>
                <div className="text-sm opacity-90">Rua Luiz Bagatini, 581</div>
              </div>
            </div>
            
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
            
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="font-semibold">Horário</div>
                <div className="text-sm opacity-90">Seg-Sex: 8h-18h</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}