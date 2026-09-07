import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  await prisma.project.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.profile.deleteMany();

  const profile = await prisma.profile.create({
    data: {
      name: 'Александр Дмитриев',
      title: 'Full-stack Developer',
      description: 'Опытный разработчик с 5+ лет коммерческого опыта.',
      email: 'alex@example.com',
      githubUrl: 'https://github.com/alexanderdmitriev',
      linkedInUrl: 'https://linkedin.com/in/alexanderdmitriev',
      telegramUrl: 'https://t.me/alexanderdmitriev',
      websiteUrl: 'https://alexanderdmitriev.dev',
    },
  });

  console.log(`✅ Profile created: ${profile.name}`);

  const skillsData = [
    { name: 'TypeScript', category: 'Languages', level: 5 },
    { name: 'JavaScript', category: 'Languages', level: 5 },
    { name: 'Node.js', category: 'Backend', level: 5 },
    { name: 'NestJS', category: 'Backend', level: 4 },
    { name: 'React', category: 'Frontend', level: 4 },
    { name: 'Next.js', category: 'Frontend', level: 4 },
    { name: 'PostgreSQL', category: 'Database', level: 4 },
    { name: 'MongoDB', category: 'Database', level: 3 },
    { name: 'Docker', category: 'DevOps', level: 4 },
    { name: 'Git', category: 'DevOps', level: 5 },
    { name: 'GraphQL', category: 'API', level: 4 },
    { name: 'Prisma', category: 'ORM', level: 4 },
  ];

  for (const skill of skillsData) {
    await prisma.skill.create({
      data: { ...skill, profileId: profile.id },
    });
  }

  console.log(`✅ ${skillsData.length} skills created`);

  const experiencesData = [
    {
      company: 'ООО "ТехноСтарт"',
      position: 'Senior Full-stack Developer',
      startDate: new Date('2022-01-01'),
      endDate: null,
      current: true,
      location: 'Москва, Россия',
      description: 'Разработка высоконагруженных веб-приложений',
      achievements: JSON.stringify([
        'Разработал микросервисную архитектуру на NestJS',
        'Оптимизировал запросы к БД, сократив время ответа на 60%',
      ]),
    },
    {
      company: 'ООО "ВебСолюшнс"',
      position: 'Middle Full-stack Developer',
      startDate: new Date('2020-06-01'),
      endDate: new Date('2021-12-31'),
      current: false,
      location: 'Санкт-Петербург, Россия',
      description: 'Разработка корпоративных веб-приложений',
      achievements: JSON.stringify([
        'Реализовал GraphQL API с поддержкой subscription',
        'Написал документацию API в Swagger',
      ]),
    },
  ];

  for (const exp of experiencesData) {
    await prisma.experience.create({
      data: { ...exp, profileId: profile.id },
    });
  }

  console.log(`✅ ${experiencesData.length} experiences created`);

  const projectsData = [
    {
      name: 'Portfolio API',
      description: 'Цифровая визитка с GraphQL API',
      repoUrl: 'https://github.com/alexanderdmitriev/portfolio-backend',
      liveUrl: 'https://portfolio-api.example.com/graphql',
      technologies: JSON.stringify(['NestJS', 'GraphQL', 'Prisma', 'SQLite', 'Docker']),
      featured: true,
    },
    {
      name: 'E-commerce Platform',
      description: 'Платформа для интернет-магазинов',
      repoUrl: 'https://github.com/alexanderdmitriev/ecommerce-platform',
      liveUrl: null,
      technologies: JSON.stringify(['React', 'Next.js', 'Node.js', 'Express', 'MongoDB']),
      featured: false,
    },
  ];

  for (const project of projectsData) {
    await prisma.project.create({
      data: { ...project, profileId: profile.id },
    });
  }

  console.log(`✅ ${projectsData.length} projects created`);
  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e: Error) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
