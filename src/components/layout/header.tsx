'use client'

import Link from 'next/link'
import { ShoppingCart, Menu, X, Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/cart-provider'
import { Badge } from '@/components/ui/badge'
import { ShippingButton } from '@/components/ui/shipping-button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const { items } = useCart()
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>+55 (49) 3436-1447</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span>contato@scpneus.shop</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>Xanxerê - SC</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-xs sm:text-sm">
              <Clock className="w-3 h-3" />
              <span>Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <img
                  src="/images/logo-sc-pneus-oficial.png"
                  alt="SC PNEUS"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-bold text-xl text-primary">SC PNEUS</span>
                <div className="text-xs text-muted-foreground">Distribuidora Autorizada</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Início
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <span>Produtos</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isProductsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link 
                      href="#products" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      BFGoodrich All-Terrain KO3
                    </Link>
                    <Link 
                      href="#products" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      Pneus Aro 15"
                    </Link>
                    <Link 
                      href="#products" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      Pneus Aro 16"
                    </Link>
                    <Link 
                      href="#products" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      Pneus Aro 17"
                    </Link>
                    <Link 
                      href="#products" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      Pneus Aro 18"
                    </Link>
                    <Link 
                      href="#products" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      Pneus Aro 20"
                    </Link>
                  </div>
                )}
              </div>

              <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                Sobre Nós
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contato
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Shipping Calculator Button */}
              <ShippingButton />

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/554934361447"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <Link
                href="/"
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              
              <div>
                <button 
                  className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  <span>Produtos</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link
                      href="#products"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      BFGoodrich All-Terrain KO3
                    </Link>
                    <Link
                      href="#products"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pneus Aro 15"
                    </Link>
                    <Link
                      href="#products"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pneus Aro 16"
                    </Link>
                    <Link
                      href="#products"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pneus Aro 17"
                    </Link>
                    <Link
                      href="#products"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pneus Aro 18"
                    </Link>
                    <Link
                      href="#products"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pneus Aro 20"
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="#about"
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="#contact"
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              
              <div className="pt-3 border-t">
                <a
                  href="https://wa.me/554934361447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}