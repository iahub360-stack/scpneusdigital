import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para ajudar você a escolher 
            os pneus ideais para seu veículo off-road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Telefone</div>
                  <div className="text-muted-foreground">(11) 99999-9999</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-muted-foreground">(11) 99999-9999</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">E-mail</div>
                  <div className="text-muted-foreground">contato@scpneus.shop</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Localização</div>
                  <div className="text-muted-foreground">São Paulo, SP</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Horário</div>
                  <div className="text-muted-foreground">
                    Seg-Sex: 8h-18h<br />
                    Sáb: 8h-12h
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">🚚 Entrega para todo Brasil</h4>
                  <p className="text-sm text-yellow-700">
                    Enviamos para todas as regiões com segurança e rapidez.
                  </p>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">💬 Atendimento Especializado</h4>
                  <p className="text-sm text-green-700">
                    Nossa equipe conhece profundamente cada produto para te ajudar na escolha ideal.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">🔧 Instalação</h4>
                  <p className="text-sm text-blue-700">
                    Rede de parceiros autorizados para instalação profissional em sua região.
                  </p>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <a href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os pneus BFGoodrich KO3">
                    <Phone className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Formas de Pagamento</h3>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-sm text-muted-foreground">Aceitamos:</div>
            <img 
              src="/images/payment/mercado pago livre.jpeg" 
              alt="Mercado Pago e Mercado Libre"
              className="h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}