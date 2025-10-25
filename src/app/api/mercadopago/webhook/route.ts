import { NextRequest, NextResponse } from 'next/server'

// Configurações do Mercado Pago
const MERCADO_PAGO_CONFIG = {
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || 'APP_USR-4087281846949400-102400-3f2cab4f09ed4f9e04c5a75983c610f3-2257480138',
  baseUrl: 'https://api.mercadopago.com'
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, data, id } = body

    console.log('Webhook recebido:', { action, data, id })

    // Verificar se é uma notificação de pagamento
    if (action === 'payment.updated') {
      const paymentId = data.id
      
      // Buscar informações do pagamento
      const paymentResponse = await fetch(`${MERCADO_PAGO_CONFIG.baseUrl}/v1/payments/${paymentId}`, {
        headers: {
          'Authorization': `Bearer ${MERCADO_PAGO_CONFIG.accessToken}`
        }
      })

      if (paymentResponse.ok) {
        const payment = await paymentResponse.json()
        
        // Aqui você pode:
        // 1. Atualizar o status do pedido no banco de dados
        // 2. Enviar e-mail de confirmação
        // 3. Notificar o cliente via WhatsApp
        // 4. Atualizar o estoque
        
        console.log('Status do pagamento:', {
          id: payment.id,
          status: payment.status,
          status_detail: payment.status_detail,
          external_reference: payment.external_reference,
          amount: payment.transaction_amount
        })

        // Exemplo de lógica baseada no status
        switch (payment.status) {
          case 'approved':
            console.log('Pagamento aprovado - Processar pedido')
            // await processOrder(payment.external_reference)
            break
          case 'rejected':
            console.log('Pagamento rejeitado')
            // await handleRejectedPayment(payment.external_reference)
            break
          case 'pending':
            console.log('Pagamento pendente')
            // await handlePendingPayment(payment.external_reference)
            break
        }
      }
    }

    return NextResponse.json({ received: true })

  } catch (error) {
    console.error('Erro no webhook:', error)
    return NextResponse.json(
      { error: 'Erro interno no webhook' },
      { status: 500 }
    )
  }
}

// Suporte para outros métodos HTTP
export async function GET() {
  return NextResponse.json({ status: 'webhook active' })
}