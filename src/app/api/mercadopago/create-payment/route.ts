import { NextRequest, NextResponse } from 'next/server'

// Configurações do Mercado Pago
const MERCADO_PAGO_CONFIG = {
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || 'APP_USR-4087281846949400-102400-3f2cab4f09ed4f9e04c5a75983c610f3-2257480138',
  publicKey: process.env.MERCADO_PAGO_PUBLIC_KEY || 'APP_USR-4f1dd17e-5e92-43a9-b3c0-f123c87e5536',
  userId: '2257480138',
  baseUrl: 'https://api.mercadopago.com'
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, total, buyerData, shipping } = body

    // Validar dados obrigatórios
    if (!items || !total || !buyerData) {
      return NextResponse.json(
        { error: 'Dados incompletos para gerar pagamento' },
        { status: 400 }
      )
    }

    // Criar preferência de pagamento
    const preferenceData = {
      items: items.map((item: any) => ({
        title: item.name,
        description: `${item.brand} • ${item.size}`,
        quantity: item.quantity,
        unit_price: Math.round(item.price * 100) / 100, // Converter para centavos e manter 2 casas decimais
        currency_id: 'BRL'
      })),
      payer: {
        name: buyerData.name,
        email: buyerData.email,
        phone: {
          area_code: '55',
          number: buyerData.phone.replace(/\D/g, '')
        },
        address: {
          street_name: buyerData.address.street,
          street_number: buyerData.address.number,
          neighborhood: buyerData.address.neighborhood,
          city: buyerData.address.city,
          federal_unit: buyerData.address.state,
          zip_code: buyerData.address.zipCode.replace(/\D/g, '')
        },
        identification: {
          type: 'CPF',
          number: buyerData.cpf.replace(/\D/g, '')
        }
      },
      shipments: {
        cost: shipping?.cost || 0,
        mode: 'not_specified',
        receiver_address: {
          street_name: buyerData.address.street,
          street_number: buyerData.address.number,
          neighborhood: buyerData.address.neighborhood,
          city: buyerData.address.city,
          federal_unit: buyerData.address.state,
          zip_code: buyerData.address.zipCode.replace(/\D/g, '')
        }
      },
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://distribuidora.scpneus.shop'}/sucesso`,
        failure: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://distribuidora.scpneus.shop'}/erro-pagamento`,
        pending: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://distribuidora.scpneus.shop'}/pendente-pagamento`
      },
      auto_return: 'approved',
      notification_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://distribuidora.scpneus.shop'}/api/mercadopago/webhook`,
      statement_descriptor: 'SC PNEUS DISTRIBUIDORA',
      external_reference: `ORDER_${Date.now()}_${buyerData.name.replace(/\s+/g, '_').toUpperCase()}`,
      expires: false,
      expiration_date_from: null,
      expiration_date_to: null
    }

    // Fazer requisição para API do Mercado Pago
    const response = await fetch(`${MERCADO_PAGO_CONFIG.baseUrl}/checkout/preferences`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MERCADO_PAGO_CONFIG.accessToken}`,
        'Content-Type': 'application/json',
        'X-Idempotency-Key': `ORDER_${Date.now()}`
      },
      body: JSON.stringify(preferenceData)
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Erro Mercado Pago:', errorData)
      return NextResponse.json(
        { error: 'Erro ao criar preferência de pagamento', details: errorData },
        { status: 500 }
      )
    }

    const preference = await response.json()

    // Salvar dados do pedido para referência futura
    const orderData = {
      id: preference.external_reference,
      preferenceId: preference.id,
      items,
      total,
      buyerData,
      shipping,
      status: 'pending',
      createdAt: new Date().toISOString(),
      mercadoPagoData: {
        initPoint: preference.init_point,
        sandboxInitPoint: preference.sandbox_init_point
      }
    }

    // Aqui você poderia salvar no banco de dados
    // await saveOrder(orderData)

    return NextResponse.json({
      success: true,
      paymentUrl: preference.init_point,
      preferenceId: preference.id,
      orderId: preference.external_reference,
      publicKey: MERCADO_PAGO_CONFIG.publicKey
    })

  } catch (error) {
    console.error('Erro ao processar pagamento:', error)
    return NextResponse.json(
      { error: 'Erro interno ao processar pagamento' },
      { status: 500 }
    )
  }
}