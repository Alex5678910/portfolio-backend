FROM node:20-alpine

RUN apk add --no-cache openssl

WORKDIR /app

# Копируем prisma и package.json ДО npm install
COPY prisma ./prisma/
COPY package*.json ./

# Устанавливаем зависимости (без postinstall)
RUN npm install --ignore-scripts

# Генерируем Prisma клиент
RUN npx prisma generate

# Копируем остальной код
COPY . .

# Собираем через tsc (если nest build не работает)
RUN npx tsc

EXPOSE 4545

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]