import { Module } from '@nestjs/common';
import { ExperienceResolver } from './experience.resolver';

@Module({
  providers: [ExperienceResolver],
})
export class ExperienceModule {}
