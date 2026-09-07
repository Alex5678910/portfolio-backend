import { Field, ObjectType } from '@nestjs/graphql';
import { Skill } from '../../skills/models/skill.model';
import { Experience } from '../../experience/models/experience.model';
import { Project } from '../../projects/models/project.model';

@ObjectType()
export class Profile {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  githubUrl?: string;

  @Field({ nullable: true })
  linkedInUrl?: string;

  @Field({ nullable: true })
  telegramUrl?: string;

  @Field({ nullable: true })
  websiteUrl?: string;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experiences: Experience[];

  @Field(() => [Project])
  projects: Project[];
}
