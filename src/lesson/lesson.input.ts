import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsDateString, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(6)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  @IsBoolean()
  @Field()
  isActive: boolean;
}
