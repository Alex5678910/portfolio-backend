import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  category?: string;

  @Field(() => Int, { nullable: true })
  level?: number;
}
