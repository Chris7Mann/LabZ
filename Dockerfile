FROM node:20-slim

RUN apt-get update && apt-get install -y libc6 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Prepariamo la cartella e la cache
RUN mkdir -p /app/node_modules /app/.npm && \
    chown -R 1001:1002 /app

USER 1001:1002

# Configura npm per usare la cartella locale invece di quella di sistema
ENV npm_config_cache=/app/.npm

COPY --chown=1001:1002 package*.json ./
RUN npm install

COPY --chown=1001:1002 . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
