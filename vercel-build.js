const { execSync } = require('child_process');

console.log('🔧 Generating Prisma client...');
execSync('npx prisma generate', { stdio: 'inherit' });

console.log('🏗️ Building project...');
execSync('npm run build:all', { stdio: 'inherit' });

console.log('✅ Build completed!');