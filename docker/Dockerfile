FROM node:20-alpine

RUN apk add --no-cache openssl

WORKDIR /app

# Копируем зависимости
COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

# Копируем ВСЕ исходники (нужны для импортов)
COPY . .

# Компилируем только main.ts (остальное подтянется автоматически)
RUN npx tsc src/main.ts --outDir ./dist --module commonjs --target ES2021 --esModuleInterop --experimentalDecorators --emitDecoratorMetadata --skipLibCheck

# Проверяем
RUN ls -la dist/main.js || echo "ERROR: main.js not created!"

EXPOSE 4545

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]