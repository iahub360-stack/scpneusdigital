'use client'

import { useRouter } from 'next/navigation'
import { useCart } from '@/components/cart-provider'

export function useBuyNow() {
  const router = useRouter()
  const { addItem, clearCart } = useCart()

  const buyNow = (product: any, quantity: number = 2) => {
    // Limpa carrinho anterior
    clearCart()
    
    // Adiciona o produto atual com quantidade 2
    addItem(product, quantity)
    
    // Pequeno delay para garantir que o estado foi atualizado
    setTimeout(() => {
      router.push('/carrinho')
    }, 100)
  }

  return { buyNow }
}