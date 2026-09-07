import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  repoUrl: string;

  @Field({ nullable: true })
  liveUrl?: string;

  @Field(() => [String])
  technologies: string[];

  @Field({ nullable: true })
  imageUrl?: string;

  @Field()
  featured: boolean;
}
