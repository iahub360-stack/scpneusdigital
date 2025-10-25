import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { ProductsSection } from '@/components/sections/products-section'

export const metadata: Metadata = {
  title: 'Página Inicial - BFGoodrich KO3',
  description: 'SC PNEUS - Distribuidora autorizada BFGoodrich em Xanxerê, SC. Linha completa All-Terrain T/A KO3 com garantia de 60.000 km e entrega para todo Brasil.',
  openGraph: {
    title: 'SC PNEUS - BFGoodrich KO3 | Pneus Off-Road Premium',
    description: 'Especialistas em pneus off-road com os melhores preços e garantia oficial. Visite nossa loja em Xanxerê, SC.',
    images: ['/images/hero/hero-ford-ranger-ko3.png'],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
    </div>
  )
}