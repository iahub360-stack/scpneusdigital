'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Search, Package, Truck, CheckCircle, Clock, XCircle, ArrowLeft, Home } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Order {
  id: string
  status: 'pending' | 'approved' | 'rejected' | 'shipped' | 'delivered'
  date: string
  total: number
  items: Array<{
    name: string
    quantity: number
    price: number
    image: string
  }>
  paymentMethod: string
  shippingAddress?: string
  trackingCode?: string
}

export default function MyOrdersPage() {
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    setLoading(true)
    try {
      // Em um ambiente real, você buscaria os pedidos do usuário na API
      // Por enquanto, vamos simular alguns pedidos
      const mockOrders: Order[] = [
        {
          id: 'ORD-2024-001',
          status: 'approved',
          date: '2024-01-15',
          total: 900.00,
          items: [
            {
              name: 'Pneu BF Goodrich All-Terrain T/A KO3',
              quantity: 2,
              price: 450.00,
              image: 'https://z-cdn-media.chatglm.cn/files/c2b815eb-6d05-4ac0-b508-2151d214a6d8_bfgoodrich-all-terrain-t-a-ko3-12277121.jpg?auth_key=1792866041-34b04ae193464356b31e3b53641e1466-0-549046a97271c5ca5e7ba21650d0c8da'
            }
          ],
          paymentMethod: 'Cartão de Crédito',
          shippingAddress: 'Rua Exemplo, 123 - Centro, Xanxerê - SC',
          trackingCode: 'BR123456789BR'
        },
        {
          id: 'ORD-2024-002',
          status: 'shipped',
          date: '2024-01-10',
          total: 1350.00,
          items: [
            {
              name: 'Pneu BF Goodrich All-Terrain T/A KO3',
              quantity: 3,
              price: 450.00,
              image: 'https://z-cdn-media.chatglm.cn/files/c2b815eb-6d05-4ac0-b508-2151d214a6d8_bfgoodrich-all-terrain-t-a-ko3-12277121.jpg?auth_key=1792866041-34b04ae193464356b31e3b53641e1466-0-549046a97271c5ca5e7ba21650d0c8da'
            }
          ],
          paymentMethod: 'PIX',
          shippingAddress: 'Av. Principal, 456 - Centro, Chapecó - SC',
          trackingCode: 'BR987654321BR'
        }
      ]
      
      setOrders(mockOrders)
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-600" />
      case 'shipped':
        return <Truck className="w-4 h-4 text-blue-600" />
      case 'delivered':
        return <Package className="w-4 h-4 text-purple-600" />
      default:
        return <Package className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pendente'
      case 'approved':
        return 'Aprovado'
      case 'rejected':
        return 'Rejeitado'
      case 'shipped':
        return 'Enviado'
      case 'delivered':
        return 'Entregue'
      default:
        return 'Desconhecido'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'approved':
        return 'bg-green-100 text-green-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      case 'shipped':
        return 'bg-blue-100 text-blue-800'
      case 'delivered':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p>Carregando seus pedidos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              onClick={() => router.back()}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Meus Pedidos</h1>
          </div>
          <Button onClick={() => router.push('/')} className="bg-red-600 hover:bg-red-700">
            <Home className="h-4 w-4 mr-2" />
            Página Inicial
          </Button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar por número do pedido ou status..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {searchTerm ? 'Nenhum pedido encontrado' : 'Você ainda não tem pedidos'}
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm 
                  ? 'Tente buscar com outros termos'
                  : 'Adicione produtos ao carrinho e finalize sua compra'
                }
              </p>
              <Button onClick={() => router.push('/')} className="bg-red-600 hover:bg-red-700">
                Ver Produtos
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{order.id}</CardTitle>
                      <p className="text-sm text-gray-600">Data: {formatDate(order.date)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(order.status)}>
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(order.status)}
                          <span>{getStatusText(order.status)}</span>
                        </div>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-600">
                            R$ {item.price.toFixed(2)} cada
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Order Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Forma de Pagamento</p>
                      <p className="text-gray-600">{order.paymentMethod}</p>
                    </div>
                    {order.shippingAddress && (
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Endereço de Entrega</p>
                        <p className="text-gray-600">{order.shippingAddress}</p>
                      </div>
                    )}
                  </div>

                  {order.trackingCode && (
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="font-medium text-blue-900 mb-1">Código de Rastreamento</p>
                      <p className="text-blue-800 font-mono">{order.trackingCode}</p>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-lg font-bold">
                      Total: <span className="text-red-600">R$ {order.total.toFixed(2)}</span>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                      {order.status === 'shipped' && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Rastrear Pedido
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}