const { execSync } = require('child_process');

console.log('🔧 Running Prisma generate...');
execSync('npx prisma generate', { stdio: 'inherit' });

console.log('🏗️ Building project...');
execSync('npm run build', { stdio: 'inherit' });