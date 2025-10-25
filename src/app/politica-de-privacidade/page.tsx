import { Metadata } from 'next'
import { Shield, Eye, Database, Users, Phone, Mail, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidade - SC PNEUS',
  description: 'Política de privacidade e proteção de dados da SC PNEUS. Conheça como tratamos seus dados pessoais em conformidade com a LGPD.',
  openGraph: {
    title: 'Política de Privacidade - SC PNEUS',
    description: 'Proteção e privacidade dos seus dados em conformidade com a LGPD.',
  },
}

export default function PoliticaPrivacidade() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Política de <span className="text-primary">Privacidade</span>
          </h1>
          <p className="text-lg text-gray-600">
            Proteção e segurança dos seus dados pessoais em conformidade com a LGPD
          </p>
        </div>

        {/* Compromisso */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Nosso Compromisso com sua Privacidade</h2>
            <p className="opacity-90 leading-relaxed">
              A SC PNEUS está comprometida em proteger suas informações pessoais e garantir 
              transparência sobre como coletamos, usamos e compartilhamos seus dados. 
              Esta política descreve nossas práticas em conformidade com a Lei Geral de 
              Proteção de Dados (LGPD) - Lei nº 13.709/2018.
            </p>
          </div>
        </section>

        {/* Dados Coletados */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <Database className="w-6 h-6 text-primary mr-3" />
            Dados que Coletamos
          </h2>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Dados Pessoais Fornecidos por Você</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                  <ul className="space-y-2">
                    <li>• Nome completo</li>
                    <li>• CPF/CNPJ</li>
                    <li>• Endereço completo</li>
                    <li>• Telefone e WhatsApp</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• E-mail</li>
                    <li>• Data de nascimento</li>
                    <li>• Informações de pagamento</li>
                    <li>• Histórico de compras</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Dados Coletados Automaticamente</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                  <ul className="space-y-2">
                    <li>• Endereço IP</li>
                    <li>• Tipo de navegador</li>
                    <li>• Sistema operacional</li>
                    <li>• Páginas visitadas</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Tempo de navegação</li>
                    <li>• Cookies e tecnologias similares</li>
                    <li>• Localização aproximada</li>
                    <li>• Dispositivo utilizado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Usamos seus Dados */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <Eye className="w-6 h-6 text-primary mr-3" />
            Como Usamos seus Dados
          </h2>
          
          <div className="space-y-4">
            {[
              { title: 'Execução do Contrato', desc: 'Processar pedidos, enviar produtos e gerenciar pagamentos.' },
              { title: 'Melhoria dos Serviços', desc: 'Analisar comportamentos para personalizar e melhorar nossa experiência.' },
              { title: 'Comunicação', desc: 'Enviar informações sobre pedidos, novidades e ofertas personalizadas.' },
              { title: 'Segurança', desc: 'Prevenir fraudes e garantir a segurança das transações.' },
              { title: 'Cumprimento Legal', desc: 'Atender obrigações legais e regulatórias.' },
              { title: 'Marketing', desc: 'Promover nossos produtos e serviços (com seu consentimento).' },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
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

        {/* Compartilhamento de Dados */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <Users className="w-6 h-6 text-primary mr-3" />
            Compartilhamento de Dados
          </h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
            <div className="space-y-4 text-gray-700">
              <p>
                Não vendemos suas informações pessoais. Compartilhamos dados apenas nas seguintes situações:
              </p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Parceiros Comerciais</h3>
                  <p className="text-sm">Transportadoras e gateways de pagamento para processar pedidos.</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Autoridades Governamentais</h3>
                  <p className="text-sm">Quando exigido por lei, ordem judicial ou regulamentação.</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Fusões e Aquisições</h3>
                  <p className="text-sm">Em caso de venda ou transferência do negócio, com preservação dos direitos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seus Direitos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Seus Direitos (LGPD)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                icon: <Eye className="w-5 h-5" />, 
                title: 'Acesso', 
                desc: 'Saber quais dados temos sobre você.' 
              },
              { 
                icon: <Lock className="w-5 h-5" />, 
                title: 'Correção', 
                desc: 'Atualizar dados incorretos ou incompletos.' 
              },
              { 
                icon: <Database className="w-5 h-5" />, 
                title: 'Portabilidade', 
                desc: 'Transferir seus dados para outro fornecedor.' 
              },
              { 
                icon: <Shield className="w-5 h-5" />, 
                title: 'Eliminação', 
                desc: 'Solicitar exclusão de seus dados pessoais.' 
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Segurança dos Dados */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
            <Lock className="w-6 h-6 text-primary mr-3" />
            Segurança dos Dados
          </h2>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="space-y-4 text-gray-700">
              <p>
                Implementamos medidas robustas de segurança para proteger suas informações:
              </p>
              
              <ul className="space-y-2 ml-4">
                <li>• Criptografia SSL/TLS em todas as transmissões</li>
                <li>• Servidores seguros com firewall e proteção contra invasões</li>
                <li>• Acesso restrito aos dados apenas para equipe autorizada</li>
                <li>• Backups regulares e planos de recuperação</li>
                <li>• Monitoramento constante de atividades suspeitas</li>
                <li>• Conformidade com padrões internacionais de segurança</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Cookies e Tecnologias</h2>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-4 text-gray-700">
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência:
              </p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">Cookies Essenciais</h3>
                  <p className="text-sm">Necessários para o funcionamento básico do site.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">Cookies de Desempenho</h3>
                  <p className="text-sm">Ajuda-nos a entender como você usa nosso site.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">Cookies de Marketing</h3>
                  <p className="text-sm">Para exibir anúncios relevantes (com consentimento).</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-4">
                Você pode gerenciar suas preferências de cookies nas configurações do navegador.
              </p>
            </div>
          </div>
        </section>

        {/* Menores de Idade */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Proteção de Menores de Idade</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-8">
            <p className="text-gray-700">
              Nossos serviços não são direcionados a menores de 18 anos. Não coletamos 
              intencionalmente informações de crianças. Se identificarmos que coletamos 
              dados de menor sem consentimento parental, tomaremos medidas para remover 
              essas informações imediatamente.
            </p>
          </div>
        </section>

        {/* Contato DPO */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Encarregado de Proteção de Dados (DPO)</h2>
          
          <div className="bg-primary text-white rounded-2xl p-8">
            <p className="mb-6 text-center">
              Para exercer seus direitos ou tirar dúvidas sobre nossa política de privacidade:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">E-mail DPO</div>
                  <div className="text-sm opacity-90">dpo@scpneus.com.br</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Telefone</div>
                  <div className="text-sm opacity-90">(49) 3436-1447</div>
                </div>
              </div>
            </div>
            
            <p className="text-sm opacity-80 mt-6 text-center">
              Responderemos sua solicitação em até 15 dias corridos, conforme LGPD.
            </p>
          </div>
        </section>

        {/* Atualizações */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Atualizações desta Política</h2>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <p className="text-gray-700 mb-4">
              Esta política pode ser atualizada periodicamente para refletir mudanças em 
              nossas práticas ou legislação aplicável. Qualquer alteração significativa 
              será comunicada por e-mail ou destaque em nosso site.
            </p>
            
            <div className="text-sm text-gray-600">
              <p><strong>Última atualização:</strong> 20 de janeiro de 2025</p>
              <p><strong>Versão:</strong> 1.0</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}