import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const products = [
  {
    name: 'BFGoodrich KO3 LT265/65R18 123/120S RWL',
    sku: 'BF-KO3-2656518',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: 'LT265/65R18',
    loadIndex: '123/120S',
    price: 1740.00,
    stock: 50,
    image: '/images/products/bf-ko3-265-65-18.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - O lendário pneu All-Terrain da BFGoodrich evoluiu. Desenvolvido para caminhonetes e veículos off-road que exigem aderência superior, resistência e durabilidade.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama'],
      technology: ['CoreGard', 'RWL - Raised White Letters', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '123/120S',
      speedRating: 'S'
    }
  },
  {
    name: 'BFGoodrich KO3 LT265/70R18 124/121S RWL',
    sku: 'BF-KO3-2657018',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: 'LT265/70R18',
    loadIndex: '124/121S',
    price: 1790.00,
    stock: 45,
    image: '/images/products/bf-ko3-265-70-18.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - Desenvolvido para quem vive entre o asfalto e a aventura, entrega tração imbatível em qualquer tipo de terreno.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama'],
      technology: ['CoreGard', 'RWL - Raised White Letters', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '124/121S',
      speedRating: 'S'
    }
  },
  {
    name: 'BFGoodrich KO3 35X12.5R18LT 128R',
    sku: 'BF-KO3-35X125R18',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: '35X12.5R18LT',
    loadIndex: '128R',
    price: 2650.00,
    stock: 30,
    image: '/images/products/bf-ko3-35x12-5-18.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - Tamanho extremo para desempenho off-road máximo. Ideal para veículos modificados e uso intenso em terrenos difíceis.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama', 'Areia'],
      technology: ['CoreGard', 'Construção reforçada', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '128R',
      speedRating: 'R'
    }
  },
  {
    name: 'BFGoodrich KO3 LT285/65R18 125/122S RWL',
    sku: 'BF-KO3-2856518',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: 'LT285/65R18',
    loadIndex: '125/122S',
    price: 2110.00,
    stock: 40,
    image: '/images/products/bf-ko3-285-65-18.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - Largura extra para maior tração e estabilidade. Perfeito para picapes e SUVs de grande porte.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama'],
      technology: ['CoreGard', 'RWL - Raised White Letters', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '125/122S',
      speedRating: 'S'
    }
  },
  {
    name: 'BFGoodrich KO3 LT275/65R18 123/120S RWL',
    sku: 'BF-KO3-2756518',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: 'LT275/65R18',
    loadIndex: '123/120S',
    price: 2050.00,
    stock: 35,
    image: '/images/products/bf-ko3-275-65-18.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - Equilíbrio perfeito entre desempenho on-road e off-road. Ideal para uso diário e aventuras de fim de semana.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama'],
      technology: ['CoreGard', 'RWL - Raised White Letters', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '123/120S',
      speedRating: 'S'
    }
  },
  {
    name: 'BFGoodrich KO3 LT265/60R18 114/110S',
    sku: 'BF-KO3-2656018',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: 'LT265/60R18',
    loadIndex: '114/110S',
    price: 1590.00,
    stock: 55,
    image: '/images/products/bf-ko3-265-60-18.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - Perfil mais baixo para melhor dirigibilidade em asfalto mantendo a capacidade off-road.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama'],
      technology: ['CoreGard', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '114/110S',
      speedRating: 'S'
    }
  },
  {
    name: 'BFGoodrich KO3 37X12.5R17LT 128R RWL',
    sku: 'BF-KO3-37X125R17',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: '37X12.5R17LT',
    loadIndex: '128R',
    price: 2250.00,
    stock: 25,
    image: '/images/products/bf-ko3-37x12-5-17.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - Tamanho gigante para os mais extremos off-road. Conquiste qualquer terreno com confiança.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama', 'Areia', 'Rochas'],
      technology: ['CoreGard', 'RWL - Raised White Letters', 'Construção ultra reforçada', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '128R',
      speedRating: 'R'
    }
  },
  {
    name: 'BFGoodrich KO3 LT285/70R17 126/123S RWL',
    sku: 'BF-KO3-2857017',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: 'LT285/70R17',
    loadIndex: '126/123S',
    price: 2090.00,
    stock: 38,
    image: '/images/products/bf-ko3-285-70-17.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - Altura e largura para máxima capacidade off-road. Perfeito para levantamentos e modificações.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama'],
      technology: ['CoreGard', 'RWL - Raised White Letters', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '126/123S',
      speedRating: 'S'
    }
  },
  {
    name: 'BFGoodrich KO3 LT275/70R17 124/121S RWL',
    sku: 'BF-KO3-2757017',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: 'LT275/70R17',
    loadIndex: '124/121S',
    price: 1890.00,
    stock: 42,
    image: '/images/products/bf-ko3-275-70-17.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - Uma das medidas mais populares para picapes e SUVs. Equilíbrio perfeito de desempenho.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama'],
      technology: ['CoreGard', 'RWL - Raised White Letters', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '124/121S',
      speedRating: 'S'
    }
  },
  {
    name: 'BFGoodrich KO3 LT265/70R17 123/120S RWL',
    sku: 'BF-KO3-2657017',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: 'LT265/70R17',
    loadIndex: '123/120S',
    price: 1490.90,
    stock: 60,
    image: '/images/products/bf-ko3-265-70-17.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - A medida mais versátil para uso misto. Excelente custo-benefício para qualquer aventura.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama'],
      technology: ['CoreGard', 'RWL - Raised White Letters', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '123/120S',
      speedRating: 'S'
    }
  },
  {
    name: 'BFGoodrich KO3 LT265/65R17 116/113S RWL',
    sku: 'BF-KO3-2656517',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: 'LT265/65R17',
    loadIndex: '116/113S',
    price: 1410.90,
    stock: 65,
    image: '/images/products/bf-ko3-265-65-17.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - Perfeito para SUVs e picapes médias. Mantém o visual agressivo com conforto no dia a dia.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama'],
      technology: ['CoreGard', 'RWL - Raised White Letters', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '116/113S',
      speedRating: 'S'
    }
  },
  {
    name: 'BFGoodrich KO3 LT315/75R16 127S RWL',
    sku: 'BF-KO3-3157516',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: 'LT315/75R16',
    loadIndex: '127S',
    price: 2100.00,
    stock: 28,
    image: '/images/products/bf-ko3-315-75-16.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - Largura máxima para tração extrema. Ideal para veículos clássicos e preparados.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama', 'Areia'],
      technology: ['CoreGard', 'RWL - Raised White Letters', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '127S',
      speedRating: 'S'
    }
  },
  {
    name: 'BFGoodrich KO3 LT265/75R16 123/120S RWL',
    sku: 'BF-KO3-2657516',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: 'LT265/75R16',
    loadIndex: '123/120S',
    price: 1460.00,
    stock: 48,
    image: '/images/products/bf-ko3-265-75-16.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - Altura extra para maior capacidade off-road. Perfeito para aro 16 com visual robusto.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama'],
      technology: ['CoreGard', 'RWL - Raised White Letters', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '123/120S',
      speedRating: 'S'
    }
  },
  {
    name: 'BFGoodrich KO3 LT265/70R16 117/114S RWL',
    sku: 'BF-KO3-2657016',
    brand: 'BFGoodrich',
    line: 'All-Terrain T/A KO3',
    size: 'LT265/70R16',
    loadIndex: '117/114S',
    price: 1390.00,
    stock: 70,
    image: '/images/products/bf-ko3-265-70-16.jpg',
    description: 'BFGoodrich All-Terrain T/A KO3 - A medida mais popular para aro 16. Equilíbrio perfeito entre preço e desempenho.',
    features: {
      terrain: ['Asfalto', 'Terra', 'Cascalho', 'Lama'],
      technology: ['CoreGard', 'RWL - Raised White Letters', 'Construção 100% brasileira'],
      warranty: '60.000 km',
      loadIndex: '117/114S',
      speedRating: 'S'
    }
  }
]

async function seedProducts() {
  try {
    console.log('🌱 Iniciando seed de produtos...')
    
    // Limpar produtos existentes
    await prisma.product.deleteMany()
    console.log('🗑️  Produtos existentes removidos')
    
    // Inserir novos produtos
    for (const product of products) {
      await prisma.product.create({
        data: product
      })
      console.log(`✅ Produto criado: ${product.name}`)
    }
    
    console.log(`🎉 ${products.length} produtos criados com sucesso!`)
  } catch (error) {
    console.error('❌ Erro ao criar produtos:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seedProducts()