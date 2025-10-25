import { db } from './db'

const products = [
  // 17 polegadas
  {
    id: "bfg-ko3-265-65-17",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "265/65R17",
    loadIndex: "116/113S",
    price: 1250.00,
    stock: 45,
    image: "/images/products/pneu-bfgoodrich-aro-17-all-terrain-ko3-265-65r17-116-113s-letras-brancas-1.jpg",
    description: "Pneu off-road premium com tecnologia CoreGard Max™"
  },
  {
    id: "bfg-ko3-285-70-17",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "285/70R17",
    loadIndex: "121/118S",
    price: 1450.00,
    stock: 32,
    image: "/images/products/pneu-bfgoodrich-aro-17-all-terrain-ko3-265-65r17-116-113s-letras-brancas-2.jpg",
    description: "Máximo desempenho off-road com tração superior"
  },
  {
    id: "bfg-ko3-265-70-17",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "265/70R17",
    loadIndex: "121/118S",
    price: 1350.00,
    stock: 28,
    image: "/images/products/ALL-TERRAIN-TA-KO3-1-1080x675.jpg",
    description: "Equilíbrio perfeito entre off-road e asfalto"
  },
  {
    id: "bfg-ko3-255-75-17",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "255/75R17",
    loadIndex: "111/108S",
    price: 1200.00,
    stock: 38,
    image: "/images/products/ALL-TERRAIN-TA-KO3-1-1080x675.jpg",
    description: "Versatilidade para qualquer aventura"
  },
  // 18 polegadas
  {
    id: "bfg-ko3-275-65-18",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "275/65R18",
    loadIndex: "123/120S",
    price: 1550.00,
    stock: 22,
    image: "/images/products/ALL-TERRAIN-TA-KO3-1-1080x675.jpg",
    description: "Desempenho superior para SUVs e picapes"
  },
  {
    id: "bfg-ko3-265-60-18",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "265/60R18",
    loadIndex: "110/107S",
    price: 1400.00,
    stock: 25,
    image: "/images/products/ALL-TERRAIN-TA-KO3-1-1080x675.jpg",
    description: "Tração extrema com conforto no asfalto"
  },
  // 15 polegadas
  {
    id: "bfg-ko3-31x10-50-15",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "31x10.50R15",
    loadIndex: "109S",
    price: 980.00,
    stock: 42,
    image: "/images/products/ALL-TERRAIN-TA-KO3-1-1080x675.jpg",
    description: "Clássico off-road com tecnologia moderna"
  },
  {
    id: "bfg-ko3-33x12-50-15",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "33x12.50R15",
    loadIndex: "108S",
    price: 1150.00,
    stock: 18,
    image: "/images/products/ALL-TERRAIN-TA-KO3-1-1080x675.jpg",
    description: "Máxima tração para terrenos extremos"
  },
  // 16 polegadas
  {
    id: "bfg-ko3-265-75-16",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "265/75R16",
    loadIndex: "123/120S",
    price: 1300.00,
    stock: 35,
    image: "/images/products/ALL-TERRAIN-TA-KO3-1-1080x675.jpg",
    description: "Versatilidade e durabilidade comprovadas"
  },
  {
    id: "bfg-ko3-285-75-16",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "285/75R16",
    loadIndex: "126/123S",
    price: 1500.00,
    stock: 20,
    image: "/images/products/ALL-TERRAIN-TA-KO3-1-1080x675.jpg",
    description: "Poder e tração para qualquer desafio"
  },
  // 20 polegadas
  {
    id: "bfg-ko3-275-60-20",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "275/60R20",
    loadIndex: "119/116S",
    price: 1750.00,
    stock: 15,
    image: "/images/products/ALL-TERRAIN-TA-KO3-1-1080x675.jpg",
    description: "Luxo e desempenho off-road"
  },
  {
    id: "bfg-ko3-285-60-20",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "285/60R20",
    loadIndex: "122/119S",
    price: 1850.00,
    stock: 12,
    image: "/images/products/ALL-TERRAIN-TA-KO3-1-1080x675.jpg",
    description: "Premium para veículos modernos"
  },
  // Variações adicionais
  {
    id: "bfg-ko3-295-70-17",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "295/70R17",
    loadIndex: "121/118S",
    price: 1600.00,
    stock: 8,
    image: "/images/products/ALL-TERRAIN-TA-KO3-1-1080x675.jpg",
    description: "Extra large para máxima tração"
  },
  {
    id: "bfg-ko3-305-65-17",
    name: "BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich",
    line: "All-Terrain T/A KO3",
    size: "305/65R17",
    loadIndex: "121/118S",
    price: 1650.00,
    stock: 6,
    image: "/images/products/ALL-TERRAIN-TA-KO3-1-1080x675.jpg",
    description: "Medida especial para off-road extremo"
  }
]

export async function seedProducts() {
  try {
    // Clear existing products
    await db.product.deleteMany()
    
    // Insert new products
    for (const product of products) {
      await db.product.create({
        data: product
      })
    }
    
    console.log('✅ Products seeded successfully!')
  } catch (error) {
    console.error('❌ Error seeding products:', error)
  }
}

// Run if called directly
if (require.main === module) {
  seedProducts()
}