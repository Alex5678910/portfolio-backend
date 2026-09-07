import { Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from '../common/prisma/prisma.service';
import { Project } from './models/project.model';

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Project])
  async projects() {
    const projects = await this.prisma.project.findMany();
    return projects.map(proj => ({
      ...proj,
      technologies: JSON.parse(proj.technologies),
    }));
  }
}
