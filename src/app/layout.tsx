import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Providers } from "@/components/providers";
import LucasChat from "@/components/chat/LucasChat";

import MercadoPagoSDK from "@/components/mercadopago/mercado-pago-sdk";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://distribuidora.scpneus.shop'),
  title: {
    default: 'SC PNEUS Distribuidora - Autorizada BFGoodrich | Pneus Off-Road em Xanxerê SC',
    template: '%s | SC PNEUS Distribuidora'
  },
  description: 'SC PNEUS Distribuidora - Oficial autorizada BFGoodrich em Xanxerê, Santa Catarina. Especialistas em pneus All-Terrain T/A KO3 com garantia oficial de 60.000 km. Entrega rápida para todo Brasil. +55 (49) 3436-1447',
  keywords: [
    'SC PNEUS Distribuidora',
    'SC PNEUS Xanxerê',
    'distribuidora BFGoodrich',
    'BFGoodrich Xanxerê',
    'pneus BFGoodrich Santa Catarina',
    'BFGoodrich KO3',
    'pneus off-road',
    'pneus 4x4',
    'pneus all-terrain',
    'distribuidora pneus Xanxerê',
    'pneus BFGoodrich SC',
    'comprar pneus BFGoodrich',
    'revendedor BFGoodrich',
    'pneus para caminhonete',
    'pneus para pickup',
    'pneus para jipe',
    'pneus para SUV',
    'pneus All-Terrain T/A KO3',
    'pneus aro 15',
    'pneus aro 16', 
    'pneus aro 17',
    'pneus aro 18',
    'pneus aro 20',
    'garantia pneus BFGoodrich',
    'pneus com garantia oficial',
    'distribuidor autorizado BFGoodrich',
    'pneus off-road preço',
    'melhor pneu 4x4',
    'pneu para caminhonete 4x4',
    'pneu all terrain',
    'pneus off road brasil',
    'pneus para 4x4 profissionais',
    'pneus BFGoodrich revendedor',
    'pneus off road garantia',
    'pneus 4x4 off road',
    'pneus para trilha',
    'pneus para aventura',
    'pneus para trabalho pesado',
    'pneus para estrada de terra',
    'pneus para montanha',
    'pneus para lama',
    'pneus para areia',
    'loja de pneus Xanxerê',
    'pneus BFGoodrich oeste SC',
    'distribuidora pneus Santa Catarina'
  ],
  authors: [{ name: 'SC PNEUS DISTRIBUIDORA' }],
  creator: 'SC PNEUS DISTRIBUIDORA',
  publisher: 'SC PNEUS DISTRIBUIDORA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://distribuidora.scpneus.shop',
    title: 'SC PNEUS Distribuidora - Autorizada BFGoodrich | Pneus Off-Road em Xanxerê SC',
    description: 'SC PNEUS Distribuidora - Oficial autorizada BFGoodrich em Xanxerê, Santa Catarina. Especialistas em pneus All-Terrain T/A KO3 com garantia oficial de 60.000 km. Entrega rápida para todo Brasil.',
    siteName: 'SC PNEUS Distribuidora',
    images: [
      {
        url: '/images/logo-sc-pneus-oficial.png',
        width: 1200,
        height: 630,
        alt: 'SC PNEUS Distribuidora - Autorizada BFGoodrich em Xanxerê SC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SC PNEUS Distribuidora - Autorizada BFGoodrich',
    description: 'Distribuidora autorizada BFGoodrich em Xanxerê, SC. Pneus off-road com garantia oficial de 60.000 km. Entrega para todo Brasil.',
    images: ['/images/logo-sc-pneus-oficial.png'],
    creator: '@scpneus',
    site: '@scpneus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://distribuidora.scpneus.shop',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://distribuidora.scpneus.shop" />
        <link rel="alternate" hrefLang="pt-br" href="https://distribuidora.scpneus.shop" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SC PNEUS" />
        
        {/* Performance Optimization */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//sdk.mercadopago.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://sdk.mercadopago.com" crossOrigin="" />
        
        {/* Font Optimization */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="" />
        
        {/* SEO */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo-sc-pneus-oficial.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo-sc-pneus-oficial.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo-sc-pneus-oficial.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SC PNEUS DISTRIBUIDORA",
              "description": "Distribuidora autorizada BFGoodrich especializada em pneus off-road e all-terrain",
              "url": "https://distribuidora.scpneus.shop",
              "telephone": "+55 (49) 3436-1447",
              "email": "contato@scpneus.shop",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Luiz Bagatini, 581",
                "addressLocality": "Xanxerê",
                "addressRegion": "SC",
                "postalCode": "89820-000",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-26.123456789",
                "longitude": "-52.123456789"
              },
              "openingHours": "Mo-Fr 08:00-18:00 Sa 08:00-12:00",
              "sameAs": [
                "https://www.facebook.com/scpneus",
                "https://www.instagram.com/scpneus"
              ],
              "priceRange": "$$",
              "image": "https://distribuidora.scpneus.shop/images/logo-sc-pneus-oficial.png",
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Pneu BFGoodrich All-Terrain T/A KO3",
                    "category": "Pneus Off-Road",
                    "brand": "BFGoodrich"
                  },
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "BRL",
                  "priceValidUntil": "2024-12-31"
                }
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Brasil"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Catálogo de Pneus BFGoodrich",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Pneu BFGoodrich All-Terrain T/A KO3",
                      "category": "Pneus Off-Road"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <MercadoPagoSDK publicKey="APP_USR-4f1dd17e-5e92-43a9-b3c0-f123c87e5536" />
        <div className="flex-grow">
          <Providers>
            <Header />
            <main className="w-full">
              {children}
            </main>
          </Providers>
        </div>
        <Footer />
        <LucasChat />
        <Toaster />
      </body>
    </html>
  );
}
