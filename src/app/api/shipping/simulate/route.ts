import { NextRequest, NextResponse } from 'next/server'

interface ShippingOption {
  id: string
  name: string
  price: number
  days: number
}

export async function POST(request: NextRequest) {
  try {
    const { cep } = await request.json()
    
    // Validação do CEP
    if (!cep || cep.length !== 8) {
      return NextResponse.json(
        { error: 'CEP inválido' },
        { status: 400 }
      )
    }

    // Simulação de cálculo de frete baseado no CEP
    // Em um ambiente real, você integraria com os Correios ou outra transportadora
    const firstDigit = parseInt(cep[0])
    
    let shippingOptions: ShippingOption[] = []
    
    // Lógica de exemplo para diferentes regiões
    if (firstDigit <= 2) {
      // Norte e Nordeste
      shippingOptions = [
        {
          id: 'pac_norte',
          name: 'PAC',
          price: 45.90,
          days: 10
        },
        {
          id: 'sedex_norte',
          name: 'SEDEX',
          price: 89.90,
          days: 5
        }
      ]
    } else if (firstDigit <= 5) {
      // Centro-Oeste e Sudeste (exceto SP/RJ)
      shippingOptions = [
        {
          id: 'pac_centro',
          name: 'PAC',
          price: 25.90,
          days: 7
        },
        {
          id: 'sedex_centro',
          name: 'SEDEX',
          price: 49.90,
          days: 3
        }
      ]
    } else if (firstDigit <= 7) {
      // São Paulo e Rio de Janeiro
      shippingOptions = [
        {
          id: 'pac_sudeste',
          name: 'PAC',
          price: 19.90,
          days: 5
        },
        {
          id: 'sedex_sudeste',
          name: 'SEDEX',
          price: 35.90,
          days: 2
        }
      ]
    } else {
      // Sul
      shippingOptions = [
        {
          id: 'pac_sul',
          name: 'PAC',
          price: 29.90,
          days: 6
        },
        {
          id: 'sedex_sul',
          name: 'SEDEX',
          price: 54.90,
          days: 3
        }
      ]
    }

    // Adicionar opção de transporte próprio para CEPs próximos
    if (firstDigit >= 4 && firstDigit <= 6) {
      shippingOptions.push({
        id: 'proprio',
        name: 'Transporte Próprio',
        price: 39.90,
        days: 4
      })
    }

    return NextResponse.json({
      success: true,
      options: shippingOptions,
      cep: cep
    })

  } catch (error) {
    console.error('Erro ao simular frete:', error)
    return NextResponse.json(
      { error: 'Erro ao calcular frete' },
      { status: 500 }
    )
  }
}