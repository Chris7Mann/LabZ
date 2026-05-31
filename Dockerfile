FROM node:20-slim

RUN apt-get update && apt-get install -y libc6 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Non forzare chown su tutto, usiamo root per lo sviluppo locale
# Rimuovi le istruzioni USER e chown eccessive che causano conflitti
COPY package*.json ./

RUN npm install

# Copiamo il resto (Next.js scriverà in /app/.next come root, senza blocchi)
COPY . .

EXPOSE 3000

# Usiamo 'npm run dev' direttamente
CMD ["npm", "run", "dev"]