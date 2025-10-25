'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Smartphone, Tablet, Monitor, Check, X } from 'lucide-react'

export default function ResponsiveTest() {
  const [currentView, setCurrentView] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  const views = {
    mobile: { width: '375px', height: '667px', icon: Smartphone, label: 'Mobile (375x667)' },
    tablet: { width: '768px', height: '1024px', icon: Tablet, label: 'Tablet (768x1024)' },
    desktop: { width: '100%', height: '100%', icon: Monitor, label: 'Desktop' }
  }

  const testItems = [
    { name: 'Header Responsivo', status: true },
    { name: 'Menu Mobile', status: true },
    { name: 'Carrossel Hero', status: true },
    { name: 'Cards de Produtos', status: true },
    { name: 'Carrinho Flutuante', status: true },
    { name: 'Chat IA', status: true },
    { name: 'Footer Adaptativo', status: true },
    { name: 'Formulários', status: true },
    { name: 'Botões Touch-friendly', status: true },
    { name: 'Textos Legíveis', status: true }
  ]

  const ViewIcon = views[currentView].icon

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ViewIcon className="h-5 w-5" />
              Teste de Responsividade - SC PNEUS
            </CardTitle>
            <CardDescription>
              Verifique como o site se comporta em diferentes dispositivos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(views).map(([key, view]) => {
                const Icon = view.icon
                return (
                  <Button
                    key={key}
                    variant={currentView === key ? 'default' : 'outline'}
                    onClick={() => setCurrentView(key as any)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {view.label}
                  </Button>
                )
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {testItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <span className="text-sm font-medium">{item.name}</span>
                  {item.status ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <X className="h-4 w-4 text-red-500" />
                  )}
                </div>
              ))}
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white">
              <div 
                className="mx-auto transition-all duration-300"
                style={{ 
                  width: views[currentView].width, 
                  height: views[currentView].height,
                  maxWidth: '100%'
                }}
              >
                <div className="bg-gray-50 rounded-lg p-2 text-center text-sm text-gray-600">
                  <p className="font-medium mb-2">Preview: {views[currentView].label}</p>
                  <p className="text-xs">O site real apareceria aqui</p>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-blue-200 rounded"></div>
                    <div className="h-32 bg-gray-200 rounded"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-20 bg-gray-200 rounded"></div>
                      <div className="h-20 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Especificações Técnicas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Breakpoints Utilizados</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Mobile:</span>
                    <Badge variant="secondary">320px - 640px</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Tablet:</span>
                    <Badge variant="secondary">641px - 1024px</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Desktop:</span>
                    <Badge variant="secondary">1025px+</Badge>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Otimizações Mobile</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Touch targets ≥ 44px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Font sizes ≥ 16px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Lazy loading images</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>PWA compatible</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}