# 🚀 Guia Rápido - Adicionar Produtos SC PNEUS

## 📋 **Métodos para Adicionar Produtos**

### **🔥 Método 1: API REST (Recomendado)**

#### **Via cURL (Terminal)**
```bash
# Criar novo produto
curl -X POST https://distribuidora.scpneus.shop/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Pneu BFGoodrich All-Terrain T/A KO3",
    "brand": "BFGoodrich",
    "line": "All-Terrain T/A KO3",
    "size": "265/65R17",
    "sku": "BFG-KO3-265-65R17-001",
    "loadIndex": "116/113S",
    "price": 899.99,
    "stock": 50,
    "image": "/images/products/bfg-ko3-265-65r17.jpg",
    "description": "Pneu off-road premium para terrenos variados",
    "features": "Garantia 60.000 km, Tecnologia CoreGard, 3PMSF"
  }'
```

#### **Via JavaScript/Fetch**
```javascript
const newProduct = {
  name: "Pneu BFGoodrich All-Terrain T/A KO3",
  brand: "BFGoodrich",
  line: "All-Terrain T/A KO3",
  size: "285/70R17",
  sku: "BFG-KO3-285-70R17-001",
  loadIndex": "121/118S",
  price: 1099.99,
  stock: 30,
  image: "/images/products/bfg-ko3-285-70r17.jpg",
  description: "Pneu off-road para 4x4 e SUVs",
  features: "Garantia 60.000 km, CoreGard Max, 3PMSF"
};

fetch('https://distribuidora.scpneus.shop/api/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newProduct)
})
.then(response => response.json())
.then(data => console.log('Produto criado:', data))
.catch(error => console.error('Erro:', error));
```

---

### **🔧 Método 2: Prisma Studio (Interface Visual)**

#### **Passo a Passo:**
```bash
# 1. Abrir Prisma Studio
npx prisma studio

# 2. Navegar no navegador para http://localhost:5555

# 3. Clicar em "Product" na lateral esquerda

# 4. Clicar em "Add record"

# 5. Preencher os campos:
#    - name: Nome do produto
#    - brand: Marca (BFGoodrich)
#    - line: Linha (All-Terrain T/A KO3)
#    - size: Medida (265/65R17)
#    - sku: Código único (BFG-KO3-265-65R17-001)
#    - loadIndex: Índice de carga (116/113S)
#    - price: Preço (899.99)
#    - stock: Estoque (50)
#    - image: Caminho da imagem
#    - description: Descrição (opcional)
#    - features: Features (opcional)

# 6. Clicar em "Save"
```

---

### **💾 Método 3: Database Direct (SQL)**

#### **Via SQLite Command Line**
```bash
# 1. Abrir database
sqlite3 prisma/dev.db

# 2. Inserir produto
INSERT INTO Product (
  name, brand, line, size, sku, loadIndex, 
  price, stock, image, description, features
) VALUES (
  'Pneu BFGoodrich All-Terrain T/A KO3',
  'BFGoodrich',
  'All-Terrain T/A KO3',
  '265/65R17',
  'BFG-KO3-265-65R17-001',
  '116/113S',
  899.99,
  50,
  '/images/products/bfg-ko3-265-65r17.jpg',
  'Pneu off-road premium para terrenos variados',
  'Garantia 60.000 km, Tecnologia CoreGard, 3PMSF'
);

# 3. Sair
.exit
```

---

## 📝 **Template para Produtos BFGoodrich**

### **Copy-Paste Templates**

#### **Template All-Terrain T/A KO3**
```json
{
  "name": "Pneu BFGoodrich All-Terrain T/A KO3",
  "brand": "BFGoodrich",
  "line": "All-Terrain T/A KO3",
  "size": "MEDIDA_AQUI",
  "sku": "BFG-KO3-MEDIDA-001",
  "loadIndex": "ÍNDICE_AQUI",
  "price": 0.00,
  "stock": 50,
  "image": "/images/products/bfg-ko3-medida.jpg",
  "description": "Pneu off-road premium da BFGoodrich, desenvolvido para enfrentar os terrenos mais desafiadores. Com tecnologia CoreGard e garantia de 60.000 km.",
  "features": "Garantia 60.000 km, Tecnologia CoreGard, 3PMSF, Símbolo de neve, Parede lateral reforçada"
}
```

#### **Medidas Comuns e SKUs**
```json
{
  "265/65R17": {
    "sku": "BFG-KO3-265-65R17-001",
    "loadIndex": "116/113S",
    "price": 899.99
  },
  "285/70R17": {
    "sku": "BFG-KO3-285-70R17-001", 
    "loadIndex": "121/118S",
    "price": 1099.99
  },
  "265/70R17": {
    "sku": "BFG-KO3-265-70R17-001",
    "loadIndex": "115/112S", 
    "price": 949.99
  },
  "275/70R17": {
    "sku": "BFG-KO3-275-70R17-001",
    "loadIndex": "121/118S",
    "price": 1049.99
  },
  "285/75R16": {
    "sku": "BFG-KO3-285-75R16-001",
    "loadIndex": "126/123Q",
    "price": 999.99
  },
  "265/75R16": {
    "sku": "BFG-KO3-265-75R16-001",
    "loadIndex": "123/120Q",
    "price": 899.99
  }
}
```

---

## 🖼️ **Gerenciamento de Imagens**

### **Upload de Imagens**
```bash
# 1. Adicionar imagem à pasta
cp nova-imagem.jpg public/images/products/

# 2. Otimizar imagem (opcional)
# Redimensionar para 800x800px
mogrify -resize 800x800 -quality 85 public/images/products/nova-imagem.jpg

# 3. Nomear arquivo padrão
# Formato: marca-linha-medida.jpg
# Exemplo: bfgoodrich-ko3-265-65r17.jpg
```

### **URLs das Imagens**
```
✅ Correto: /images/products/bfg-ko3-265-65r17.jpg
❌ Errado: images/products/bfg-ko3-265-65r17.jpg
❌ Errado: ./images/products/bfg-ko3-265-65r17.jpg
```

---

## 🔄 **Operações CRUD**

### **Listar Todos os Produtos**
```bash
curl -X GET https://distribuidora.scpneus.shop/api/products
```

### **Buscar Produto por ID**
```bash
curl -X GET https://distribuidora.scpneus.shop/api/products/1
```

### **Atualizar Produto**
```bash
curl -X PUT https://distribuidora.scpneus.shop/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "price": 999.99,
    "stock": 25
  }'
```

### **Deletar Produto**
```bash
curl -X DELETE https://distribuidora.scpneus.shop/api/products/1
```

---

## 📊 **Planilha em Lote**

### **Excel/CSV para API**
```javascript
// Converter planilha para JSON e enviar em lote
const products = [
  {
    name: "Pneu BFGoodrich All-Terrain T/A KO3",
    brand: "BFGoodrich", 
    line: "All-Terrain T/A KO3",
    size: "265/65R17",
    sku: "BFG-KO3-265-65R17-001",
    loadIndex: "116/113S",
    price: 899.99,
    stock: 50,
    image: "/images/products/bfg-ko3-265-65r17.jpg"
  }
  // ... mais produtos
];

// Enviar em lote
products.forEach(async (product) => {
  const response = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
  console.log(await response.json());
});
```

---

## ⚠️ **Validações Importantes**

### **Campos Obrigatórios**
- ✅ `name` - Nome do produto
- ✅ `brand` - Marca
- ✅ `line` - Linha do produto
- ✅ `size` - Medida
- ✅ `sku` - Código único (não pode repetir)
- ✅ `loadIndex` - Índice de carga
- ✅ `price` - Preço (número)
- ✅ `stock` - Estoque (número)
- ✅ `image` - Caminho da imagem

### **Validações Automáticas**
- SKU único (sem duplicatas)
- Price ≥ 0
- Stock ≥ 0
- Image deve começar com "/"
- Size formato válido (ex: 265/65R17)

---

## 🔍 **Dicas de SEO para Produtos**

### **Títulos Otimizados**
```
✅ Bom: "Pneu BFGoodrich All-Terrain T/A KO3 265/65R17"
❌ Ruim: "KO3 265/65R17"
```

### **Descrições Ricas**
```
✅ Bom: "Pneu BFGoodrich All-Terrain T/A KO3 265/65R17 - Perfeito para 4x4 e SUVs, com garantia de 60.000 km. Ideal para estrada de terra, lama e areia."

❌ Ruim: "Pneu para trilha"
```

---

## 📱 **Teste no Site**

### **Verificar Produto no Site**
1. Acesse: https://distribuidora.scpneus.shop
2. Role até a seção de produtos
3. Verifique se o novo produto aparece
4. Teste o carrinho de compras
5. Confirme todas as informações

---

## 🆘 **Suporte**

### **Problemas Comuns**
- **SKU duplicado**: Escolha outro código
- **Imagem não aparece**: Verifique o caminho
- **Preço inválido**: Use número com ponto decimal
- **Produto não aparece**: Verifique se stock > 0

### **Contato para Suporte**
- **Desenvolvimento**: [Email/Telefone]
- **Documentação**: Ver DOCUMENTACAO_COMPLETA.md

---

## 📈 **Monitoramento**

### **Acompanhar Vendas**
```bash
# Ver produtos mais vendidos (futuro dashboard)
# Monitorar estoque baixo
# Analisar preços competitivos
```

---

*Última atualização: $(date)*
*Versão: 1.0.0*