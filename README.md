cat > README.md << 'EOF'
# Portfolio Backend API

Цифровая визитка (backend-приложение) с GraphQL API для презентации специалиста.

## 🚀 Технологии

| Технология | Описание |
|------------|----------|
| **Node.js** | Среда выполнения JavaScript |
| **NestJS** | Фреймворк для построения серверных приложений |
| **TypeScript** | Типизированный JavaScript |
| **GraphQL** | Язык запросов для API |
| **Prisma** | ORM для работы с базой данных |
| **SQLite** | Легковесная база данных |
| **Docker** | Контейнеризация приложения |

## 📁 Структура проекта

portfolio-backend/
├── src/
│   ├── common/
│   │   └── prisma/
│   │       ├── prisma.module.ts      # 📦 Prisma модуль (для DI)
│   │       └── prisma.service.ts     # 🔧 Prisma сервис (работа с БД)
│   │
│   ├── profile/
│   │   ├── models/
│   │   │   └── profile.model.ts      # 📋 GraphQL модель профиля
│   │   ├── profile.module.ts         # 📦 Модуль профиля
│   │   └── profile.resolver.ts       # 🔍 GraphQL резолвер профиля
│   │
│   ├── skills/
│   │   ├── models/
│   │   │   └── skill.model.ts        # 📋 GraphQL модель навыка
│   │   ├── skills.module.ts          # 📦 Модуль навыков
│   │   └── skills.resolver.ts        # 🔍 GraphQL резолвер навыков
│   │
│   ├── experience/
│   │   ├── models/
│   │   │   └── experience.model.ts   # 📋 GraphQL модель опыта
│   │   ├── experience.module.ts      # 📦 Модуль опыта
│   │   └── experience.resolver.ts    # 🔍 GraphQL резолвер опыта
│   │
│   ├── projects/
│   │   ├── models/
│   │   │   └── project.model.ts      # 📋 GraphQL модель проекта
│   │   ├── projects.module.ts        # 📦 Модуль проектов
│   │   └── projects.resolver.ts      # 🔍 GraphQL резолвер проектов
│   │
│   ├── app.module.ts                 # 📦 КОРНЕВОЙ МОДУЛЬ (собирает всё)
│   └── main.ts                       # 🚀 ТОЧКА ВХОДА (запускает приложение)
│
├── prisma/
│   ├── schema.prisma                 # 🗄️ Схема базы данных
│   └── seed.ts                       # 🌱 Скрипт заполнения данными
│
├── docker/
│   ├── Dockerfile                    # 🐳 Docker образ
│   └── docker-compose.yml            # 🐳 Docker Compose конфигурация
│
├── .env                              # ⚙️ Переменные окружения
├── .gitignore                        # 📄 Игнорируемые файлы
├── package.json                      # 📦 Зависимости проекта
├── tsconfig.json                     # ⚙️ Конфигурация TypeScript
├── nest-cli.json                     # ⚙️ Конфигурация NestJS
└── README.md                         # 📖 Документация