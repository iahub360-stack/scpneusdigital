# 📋 Documentação Completa - SC PNEUS Distribuidora

## 🏢 **Informações da Empresa**

### **Dados Oficiais**
- **Nome Fantasia**: SC PNEUS DISTRIBUIDORA
- **Razão Social**: SC PNEUS DISTRIBUIDORA LTDA
- **CNPJ**: [Preencher]
- **Endereço**: Rua Luiz Bagatini, 581 - Xanxerê, SC - 89820-000
- **Telefone**: +55 (49) 3436-1447
- **Email**: contato@scpneus.shop
- **Website**: https://distribuidora.scpneus.shop

### **Especialidade**
- Distribuidora Autorizada BFGoodrich
- Especialistas em pneus off-road e all-terrain
- Garantia oficial de 60.000 km
- Entrega para todo Brasil

---

## 🏗️ **Estrutura do Projeto**

### **Tecnologia Stack**
```
Framework: Next.js 15 com App Router
Linguagem: TypeScript 5
Styling: Tailwind CSS 4 + shadcn/ui
Database: Prisma ORM + SQLite
Pagamentos: Mercado Pago API
UI Components: shadcn/ui (New York style)
Icons: Lucide React
State Management: Zustand + TanStack Query
```

### **Estrutura de Pastas**
```
src/
├── app/                    # App Router (Next.js 15)
│   ├── (routes)/          # Rotas da aplicação
│   ├── api/               # API Routes
│   │   ├── products/      # CRUD de produtos
│   │   ├── mercadopago/   # Pagamentos
│   │   └── socketio/      # WebSocket
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   ├── layout/            # Header, Footer
│   ├── chat/              # Chat IA (Lucas)
│   ├── mercadopago/       # Integração Mercado Pago
│   └── sections/          # Seções da home
├── lib/
│   ├── db.ts              # Conexão Prisma
│   ├── socket.ts          # WebSocket
│   └── utils.ts           # Utilitários
├── hooks/                 # Custom hooks
├── store/                 # Zustand stores
└── types/                 # TypeScript types
```

---

## 🗄️ **Banco de Dados**

### **Schema Prisma**
```prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  brand       String
  line        String
  size        String
  sku         String   @unique
  loadIndex   String
  price       Float
  stock       Int
  image       String
  description String?
  features    String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### **Comandos Database**
```bash
# Ver schema atual
npx prisma db pull

# Fazer migrate
npx prisma migrate dev

# Push para development
npx prisma db push

# Gerar client
npx prisma generate
```

---

## 🛒 **E-commerce Features**

### **Sistema de Pagamentos - Mercado Pago**
- **Public Key**: `APP_USR-4f1dd17e-5e92-43a9-b3c0-f123c87e5536`
- **Access Token**: `APP_USR-4087281846949400-102400-3f2cab4f09ed4f9e04c5a75983c610f3-2257480138`

### **URLs de Retorno**
- **Sucesso**: `https://distribuidora.scpneus.shop/sucesso`
- **Falha**: `https://distribuidora.scpneus.shop/erro-pagamento`
- **Pendente**: `https://distribuidora.scpneus.shop/pendente-pagamento`

### **Endpoints API**
```
POST /api/mercadopago/create-payment  # Criar pagamento
POST /api/mercadopago/webhook         # Webhook status
GET  /api/products                    # Listar produtos
POST /api/products                    # Criar produto
PUT  /api/products/[id]               # Atualizar produto
DELETE /api/products/[id]             # Deletar produto
```

---

## 📱 **Como Adicionar Produtos Rapidamente**

### **Método 1: Via API (Recomendado)**
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
    "image": "/images/products/novo-produto.jpg",
    "description": "Pneu off-road premium para terrenos variados",
    "features": "Garantia 60.000 km, Tecnologia CoreGard, 3PMSF"
  }'
```

### **Método 2: Via Database Direct**
```sql
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
  '/images/products/novo-produto.jpg',
  'Pneu off-road premium para terrenos variados',
  'Garantia 60.000 km, Tecnologia CoreGard, 3PMSF'
);
```

### **Método 3: Via Prisma Studio**
```bash
# Abrir interface visual
npx prisma studio

# Navegar para Product > Add new record
```

---

## 🖼️ **Gerenciamento de Imagens**

### **Estrutura de Pastas de Imagens**
```
public/images/
├── hero/                   # Imagens do carrossel principal
├── products/              # Fotos dos produtos
├── payment/               # Logos de pagamento
├── logos/                 # Logos da marca
└── placeholder-tire.jpg   # Placeholder padrão
```

### **Dimensões Recomendadas**
- **Hero Images**: 1920x1080px (16:9)
- **Product Images**: 800x800px (1:1)
- **Thumbnails**: 400x400px
- **Logos**: Vetor ou PNG transparente

### **Otimização de Imagens**
```bash
# Comprimir imagens (exemplo com ImageMagick)
mogrify -resize 800x800 -quality 85 *.jpg
mogrify -resize 1920x1080 -quality 85 *.jpg
```

---

## 🔧 **Configurações de Ambiente**

### **Variáveis de Ambiente (.env.local)**
```env
# Database
DATABASE_URL="file:./dev.db"

# Mercado Pago
NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY="APP_USR-4f1dd17e-5e92-43a9-b3c0-f123c87e5536"
MERCADO_PAGO_ACCESS_TOKEN="APP_USR-4087281846949400-102400-3f2cab4f09ed4f9e04c5a75983c610f3-2257480138"

# URLs
NEXT_PUBLIC_SITE_URL="https://distribuidora.scpneus.shop"
NEXT_PUBLIC_WEBHOOK_URL="https://distribuidora.scpneus.shop/api/mercadopago/webhook"

# Analytics (opcional)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

---

## 🚀 **Deploy e Produção**

### **Build Commands**
```bash
# Development
npm run dev

# Build para produção
npm run build

# Start produção
npm start

# Lint
npm run lint

# Type check
npm run type-check
```

### **Vercel Deploy (Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Configurar environment variables no dashboard Vercel
```

### **Configurações de Produção**
- **Node Version**: 18.x ou superior
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Install Command**: `npm install`

---

## 📊 **SEO e Metadados**

### **Metadados Principais**
- **Title**: SC PNEUS - Distribuidora Autorizada BFGoodrich
- **Description**: Distribuidora autorizada BFGoodrich em Xanxerê, SC
- **Keywords**: pneus BFGoodrich, pneus off-road, distribuidora pneus
- **Canonical URL**: https://distribuidora.scpneus.shop

### **Structured Data (Schema.org)**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SC PNEUS DISTRIBUIDORA",
  "description": "Distribuidora autorizada BFGoodrich especializada em pneus off-road",
  "url": "https://distribuidora.scpneus.shop",
  "telephone": "+55 (49) 3436-1447",
  "email": "contato@scpneus.shop",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Luiz Bagatini, 581",
    "addressLocality": "Xanxerê",
    "addressRegion": "SC",
    "postalCode": "89820-000",
    "addressCountry": "BR"
  }
}
```

---

## 📱 **Otimização Mobile**

### **Viewport e Responsividade**
- Mobile-first design
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Touch targets: mínimo 44px
- Scroll otimizado

### **PWA Features**
```json
// manifest.json
{
  "name": "SC PNEUS",
  "short_name": "SCPNEUS",
  "description": "Distribuidora BFGoodrich",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1e40af",
  "icons": [
    {
      "src": "/images/logo-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## 🔐 **Segurança**

### **HTTPS e Headers**
- HSTS habilitado
- CSP headers configurados
- Rate limiting nas APIs
- Validação de inputs

### **Mercado Pago Security**
- Idempotency keys
- Webhook validation
- HTTPS obrigatório
- Tokens seguros

---

## 📈 **Performance**

### **Core Web Vitals**
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

### **Otimizações**
- Lazy loading de imagens
- Code splitting automático
- Font optimization
- Image optimization (Next.js Image)

---

## 🛠️ **Manutenção**

### **Backup Database**
```bash
# Backup SQLite
cp prisma/dev.db backups/dev-$(date +%Y%m%d).db

# Restore
cp backups/dev-20231201.db prisma/dev.db
```

### **Monitoramento**
- Logs de erro
- Performance monitoring
- Uso de API
- Conversões

---

## 📞 **Suporte e Contato**

### **Equipe Técnica**
- **Desenvolvimento**: [Nome/Contato]
- **Suporte Mercado Pago**: [Documentação]
- **Hosting**: Vercel

### **Links Úteis**
- [Dashboard Vercel](https://vercel.com/dashboard)
- [Mercado Pago Devs](https://www.mercadopago.com.br/developers)
- [Prisma Docs](https://www.prisma.io/docs)
- [Next.js Docs](https://nextjs.org/docs)

---

## 🔄 **Atualizações Futuras**

### **Roadmap**
- [ ] Sistema de avaliações de produtos
- [ ] Calculadora de frete avançada
- [ ] Integração com transportadoras
- [ ] Dashboard administrativo
- [ ] Sistema de promoções
- [ ] Multi-idioma

### **Versionamento**
- **v1.0**: MVP atual
- **v1.1**: Melhorias SEO
- **v1.2**: Features admin
- **v2.0**: Mobile app

---

*Documento atualizado em: $(date)*
*Versão: 1.0.0*