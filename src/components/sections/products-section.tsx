'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/ui/product-card'
import { Product } from '@/store/cart-store'

export function ProductsSection() {
  const [filter, setFilter] = useState<string>('all')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.size.includes(filter))

  const handleAddToCart = (product: Product) => {
    // This will be handled by the ProductCard component
    console.log('Adding to cart:', product.name)
  }

  const handleWhatsApp = (product: Product) => {
    const message = `Olá! Tenho interesse no produto: ${product.name} - ${product.size} - Índice: ${product.loadIndex}`
    const whatsappUrl = `https://wa.me/554934361447?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (loading) {
    return (
      <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando produtos...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Linha Completa <span className="text-blue-600">BFGoodrich KO3</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            14 medidas disponíveis para qualquer tipo de veículo off-road. 
            Qualidade premium com garantia de 60.000 km e frete grátis para todo Brasil.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === 'all' 
                ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' 
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
            }`}
          >
            Todos
          </Button>
          <Button
            variant={filter === '15' ? 'default' : 'outline'}
            onClick={() => setFilter('15')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === '15' 
                ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' 
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
            }`}
          >
            Aro 15"
          </Button>
          <Button
            variant={filter === '16' ? 'default' : 'outline'}
            onClick={() => setFilter('16')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === '16' 
                ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' 
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
            }`}
          >
            Aro 16"
          </Button>
          <Button
            variant={filter === '17' ? 'default' : 'outline'}
            onClick={() => setFilter('17')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === '17' 
                ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' 
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
            }`}
          >
            Aro 17"
          </Button>
          <Button
            variant={filter === '18' ? 'default' : 'outline'}
            onClick={() => setFilter('18')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === '18' 
                ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' 
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
            }`}
          >
            Aro 18"
          </Button>
          <Button
            variant={filter === '20' ? 'default' : 'outline'}
            onClick={() => setFilter('20')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === '20' 
                ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' 
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
            }`}
          >
            Aro 20"
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onWhatsApp={handleWhatsApp}
            />
          ))}
        </div>

        {/* Results Count */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </section>
  )
}