import { Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from '../common/prisma/prisma.service';
import { Skill } from './models/skill.model';

@Resolver(() => Skill)
export class SkillsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Skill])
  async skills() {
    return this.prisma.skill.findMany({
      orderBy: { level: 'desc' },
    });
  }
}
