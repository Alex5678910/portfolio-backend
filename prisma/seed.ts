import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Очистка данных с каскадным удалением (для PostgreSQL)
  await prisma.$transaction([
    prisma.project.deleteMany(),
    prisma.experience.deleteMany(),
    prisma.skill.deleteMany(),
    prisma.profile.deleteMany(),
  ]);

  console.log('🧹 Database cleaned');

  // Создание профиля
  const profile = await prisma.profile.create({
    data: {
      name: 'Александр Дмитриев',
      title: 'Full-stack Developer',
      description: 'Опытный разработчик с 5+ лет коммерческого опыта. Специализируюсь на создании масштабируемых веб-приложений с использованием современных технологий.',
      email: 'alex@example.com',
      githubUrl: 'https://github.com/alexanderdmitriev',
      linkedInUrl: 'https://linkedin.com/in/alexanderdmitriev',
      telegramUrl: 'https://t.me/alexanderdmitriev',
      websiteUrl: 'https://alexanderdmitriev.dev',
    },
  });

  console.log(`✅ Profile created: ${profile.name} (ID: ${profile.id})`);

  // Создание навыков
  const skillsData = [
    { name: 'TypeScript', category: 'Languages', level: 5 },
    { name: 'JavaScript', category: 'Languages', level: 5 },
    { name: 'Python', category: 'Languages', level: 3 },
    { name: 'Node.js', category: 'Backend', level: 5 },
    { name: 'NestJS', category: 'Backend', level: 4 },
    { name: 'Express.js', category: 'Backend', level: 4 },
    { name: 'React', category: 'Frontend', level: 4 },
    { name: 'Next.js', category: 'Frontend', level: 4 },
    { name: 'Vue.js', category: 'Frontend', level: 3 },
    { name: 'PostgreSQL', category: 'Database', level: 4 },
    { name: 'MongoDB', category: 'Database', level: 3 },
    { name: 'Redis', category: 'Database', level: 3 },
    { name: 'Docker', category: 'DevOps', level: 4 },
    { name: 'Kubernetes', category: 'DevOps', level: 2 },
    { name: 'Git', category: 'DevOps', level: 5 },
    { name: 'GraphQL', category: 'API', level: 4 },
    { name: 'REST API', category: 'API', level: 5 },
    { name: 'Prisma', category: 'ORM', level: 4 },
    { name: 'TypeORM', category: 'ORM', level: 3 },
    { name: 'AWS', category: 'Cloud', level: 3 },
    { name: 'Linux', category: 'DevOps', level: 4 },
  ];

  // Массовое создание навыков для лучшей производительности
  const createdSkills = await prisma.skill.createMany({
    data: skillsData.map(skill => ({
      ...skill,
      profileId: profile.id,
    })),
  });

  console.log(`✅ ${createdSkills.count} skills created`);

  // Создание опыта работы
  const experiencesData = [
    {
      company: 'ООО "ТехноСтарт"',
      position: 'Senior Full-stack Developer',
      startDate: new Date('2022-01-01'),
      endDate: null,
      current: true,
      location: 'Москва, Россия',
      description: 'Разработка и поддержка высоконагруженных веб-приложений в сфере финтех.',
      achievements: JSON.stringify([
        'Разработал микросервисную архитектуру на NestJS с использованием GraphQL',
        'Оптимизировал запросы к БД, сократив время ответа API на 60%',
        'Внедрил CI/CD пайплайн с использованием GitLab CI и Docker',
        'Настроил мониторинг и логирование с помощью Prometheus и Grafana',
        'Провел миграцию с монолита на микросервисы без даунтайма',
      ]),
    },
    {
      company: 'ООО "ВебСолюшнс"',
      position: 'Middle Full-stack Developer',
      startDate: new Date('2020-06-01'),
      endDate: new Date('2021-12-31'),
      current: false,
      location: 'Санкт-Петербург, Россия',
      description: 'Разработка корпоративных веб-приложений для крупных клиентов.',
      achievements: JSON.stringify([
        'Реализовал GraphQL API с поддержкой real-time subscription через WebSockets',
        'Написал интерактивную документацию API в Swagger/OpenAPI',
        'Оптимизировал фронтенд приложение, улучшив производительность на 40%',
        'Внедрил систему кэширования с использованием Redis',
        'Участвовал в планировании архитектуры и оценке задач',
      ]),
    },
    {
      company: 'ООО "АйтиСтарт"',
      position: 'Junior Full-stack Developer',
      startDate: new Date('2019-03-01'),
      endDate: new Date('2020-05-31'),
      current: false,
      location: 'Москва, Россия',
      description: 'Разработка стартап-проектов и веб-приложений.',
      achievements: JSON.stringify([
        'Разработал несколько SPA приложений на React и Vue.js',
        'Создал REST API на Node.js/Express с авторизацией JWT',
        'Настроил базы данных PostgreSQL и MongoDB',
        'Участвовал в Code Review и внедрении лучших практик',
      ]),
    },
  ];

  for (const exp of experiencesData) {
    await prisma.experience.create({
      data: { ...exp, profileId: profile.id },
    });
  }

  console.log(`✅ ${experiencesData.length} experiences created`);

  // Создание проектов
  const projectsData = [
    {
      name: 'Portfolio API',
      description: 'Цифровая визитка с GraphQL API и админ-панелью. Современный бэкенд с использованием NestJS и Prisma.',
      repoUrl: 'https://github.com/alexanderdmitriev/portfolio-backend',
      liveUrl: 'https://portfolio-api.example.com/graphql',
      technologies: JSON.stringify(['NestJS', 'GraphQL', 'Prisma', 'PostgreSQL', 'Docker', 'JWT']),
      featured: true,
      imageUrl: 'https://via.placeholder.com/800x400/2563eb/ffffff?text=Portfolio+API',
    },
    {
      name: 'E-commerce Platform',
      description: 'Полноценная платформа для интернет-магазинов с корзиной, оплатой и админ-панелью.',
      repoUrl: 'https://github.com/alexanderdmitriev/ecommerce-platform',
      liveUrl: 'https://ecommerce-platform.example.com',
      technologies: JSON.stringify(['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Stripe']),
      featured: true,
      imageUrl: 'https://via.placeholder.com/800x400/7c3aed/ffffff?text=E-commerce+Platform',
    },
    {
      name: 'Task Management System',
      description: 'Система управления проектами и задачами с поддержкой командной работы.',
      repoUrl: 'https://github.com/alexanderdmitriev/task-management',
      liveUrl: null,
      technologies: JSON.stringify(['Vue.js', 'Vuex', 'Node.js', 'PostgreSQL', 'Socket.io']),
      featured: false,
      imageUrl: 'https://via.placeholder.com/800x400/059669/ffffff?text=Task+Management',
    },
    {
      name: 'Weather Dashboard',
      description: 'Интерактивный дашборд погоды с графиками и анимациями.',
      repoUrl: 'https://github.com/alexanderdmitriev/weather-dashboard',
      liveUrl: 'https://weather-dashboard.example.com',
      technologies: JSON.stringify(['React', 'TypeScript', 'Chart.js', 'WebSocket', 'Tailwind CSS']),
      featured: false,
      imageUrl: 'https://via.placeholder.com/800x400/d97706/ffffff?text=Weather+Dashboard',
    },
  ];

  for (const project of projectsData) {
    await prisma.project.create({
      data: { ...project, profileId: profile.id },
    });
  }

  console.log(`✅ ${projectsData.length} projects created`);

  // Проверка результата
  const stats = await prisma.$transaction([
    prisma.profile.count(),
    prisma.skill.count(),
    prisma.experience.count(),
    prisma.project.count(),
  ]);

  console.log('📊 Database statistics:');
  console.log(`  - Profiles: ${stats[0]}`);
  console.log(`  - Skills: ${stats[1]}`);
  console.log(`  - Experiences: ${stats[2]}`);
  console.log(`  - Projects: ${stats[3]}`);
  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e: Error) => {
    console.error('❌ Seed failed:', e);
    console.error('Stack trace:', e.stack);

  })
  .finally(async () => {
    await prisma.$disconnect();
  });