# ==========================
# Stage 1: Builder
# ==========================
FROM node:20-alpine AS builder

WORKDIR /app

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o restante do projeto
COPY . .

# Criar pasta para SQLite
RUN mkdir -p /app/prisma/data

# Build do Next.js
RUN npm run build

# ==========================
# Stage 2: Produção
# ==========================
FROM node:20-alpine

WORKDIR /app

# Copiar arquivos essenciais do builder
COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/prisma /app/prisma
COPY --from=builder /app/src /app/src
COPY --from=builder /app/tsconfig.json /app/tsconfig.json
COPY --from=builder /app/server.ts /app/server.ts

# Corrigir permissões
RUN chown -R 1000:1000 /app

EXPOSE 3000

# Comando para rodar o Next.js
CMD ["npm", "run", "start"]
