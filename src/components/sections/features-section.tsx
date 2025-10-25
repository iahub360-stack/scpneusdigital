import { Card, CardContent } from '@/components/ui/card'
import { Shield, Mountain, Wrench, Award } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Paredes Reforçadas",
    description: "Tecnologia CoreGard Max™ com 3x mais resistência a furos e danos laterais."
  },
  {
    icon: Mountain,
    title: "Tração Extrema",
    description: "Desempenho superior em lama, neve e terrenos acidentados com design agressivo."
  },
  {
    icon: Wrench,
    title: "Durabilidade Comprovada",
    description: "60.000 km de garantia e composto avançado para maior vida útil no asfalto."
  },
  {
    icon: Award,
    title: "Premium Off-Road",
    description: "A escolha dos off-roaders mais exigentes. Qualidade e desempenho sem igual."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher <span className="text-primary">BFGoodrich KO3</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A evolução da lendária linha All-Terrain. Mais resistência, 
            mais tração e mais durabilidade para suas aventuras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-lg">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">60.000 km</div>
              <div className="text-primary-foreground/80">Garantia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x mais</div>
              <div className="text-primary-foreground/80">Resistente a furos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+ anos</div>
              <div className="text-primary-foreground/80">Tradição BFGoodrich</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}