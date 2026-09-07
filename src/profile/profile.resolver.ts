import { Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from '../common/prisma/prisma.service';
import { Profile } from './models/profile.model';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => Profile, { nullable: true })
  async profile() {
    const profile = await this.prisma.profile.findFirst({
      include: {
        skills: true,
        experiences: true,
        projects: true,
      },
    });

    if (!profile) return null;

    return {
      ...profile,
      experiences: profile.experiences.map(exp => ({
        ...exp,
        achievements: JSON.parse(exp.achievements),
      })),
      projects: profile.projects.map(proj => ({
        ...proj,
        technologies: JSON.parse(proj.technologies),
      })),
    };
  }
}
