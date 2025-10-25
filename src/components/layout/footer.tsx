import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Shield, ChevronRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative w-14 h-14">
                  <img
                    src="/images/logo-sc-pneus-oficial.png"
                    alt="SC PNEUS"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <span className="font-bold text-2xl">SC PNEUS</span>
                  <div className="text-sm text-gray-400 font-medium">Distribuidora Autorizada</div>
                  <div className="text-xs text-primary font-semibold">BFGoodrich Premium</div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm">
                Especialistas em pneus off-road com mais de 15 anos de experiência. 
                Oferecemos produtos premium com garantia e atendimento diferenciado.
              </p>

              {/* Certifications */}
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-xs text-gray-400">Certificado de Garantia Oficial</span>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <div className="text-sm font-semibold text-gray-300">Siga-nos</div>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-white border-l-4 border-primary pl-4">
                Institucional
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Sobre Nós', href: '/sobre-nos' },
                  { name: 'Nossa História', href: '#' },
                  { name: 'Produtos', href: '#products' },
                  { name: 'Serviços', href: '#' },
                  { name: 'Blog', href: '#' },
                  { name: 'Trabalhe Conosco', href: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors duration-200 group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-white border-l-4 border-primary pl-4">
                Contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Telefone / WhatsApp</div>
                    <a 
                      href="https://wa.me/554934361447" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary transition-colors text-sm"
                    >
                      +55 (49) 3436-1447
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">E-mail</div>
                    <a 
                      href="mailto:contato@scpneus.shop" 
                      className="text-gray-300 hover:text-primary transition-colors text-sm"
                    >
                      contato@scpneus.shop
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Endereço</div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      Rua Luiz Bagatini, 581<br />
                      Nossa Senhora de Lourdes<br />
                      Xanxerê - SC, 89820-000
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-white border-l-4 border-primary pl-4">
                Localização
              </h3>
              <div className="relative h-48 rounded-lg overflow-hidden border border-gray-600 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.123456789!2d-52.123456789!3d-26.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzI2LjMiTiA1MsKwMDcnMjIuMiJF!5e0!3m2!1sen!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Localização SC PNEUS - Xanxerê SC"
                />
                {/* Fallback overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
                <a 
                  href="https://maps.app.goo.gl/g4KiEMpFQZPyx35H7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-primary text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors z-10"
                >
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal Links */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-gray-400 text-sm mb-1">
                © 2025 SCPNEUS DISTRIBUIDORA. Todos os direitos reservados.
              </div>
              <div className="text-xs text-gray-500">
                CNPJ: 17.474.116/0001-65
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-xs">
              <Link href="/politica-de-entrega" className="text-gray-400 hover:text-primary transition-colors">
                Política de Entrega
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/garantia" className="text-gray-400 hover:text-primary transition-colors">
                Garantia
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/trocas-e-devolucoes" className="text-gray-400 hover:text-primary transition-colors">
                Trocas e Devoluções
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/politica-de-privacidade" className="text-gray-400 hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/termos-de-uso" className="text-gray-400 hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/lgpd" className="text-gray-400 hover:text-primary transition-colors">
                LGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}