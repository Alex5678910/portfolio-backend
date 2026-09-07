import { Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from '../common/prisma/prisma.service';
import { Experience } from './models/experience.model';

@Resolver(() => Experience)
export class ExperienceResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Experience])
  async experiences() {
    const experiences = await this.prisma.experience.findMany();
    return experiences.map(exp => ({
      ...exp,
      achievements: JSON.parse(exp.achievements),
    }));
  }
}
