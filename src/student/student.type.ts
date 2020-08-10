import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field(type => ID)
  _id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
