/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query(returns => LessonType)
  lesson(@Args('id') id: string): any {
    return this.lessonService.getLesson(id);
  }

  @Query(returns => [LessonType])
  lessons(){
      return this.lessonService.getLessons();
  }

  @Mutation(returns => LessonType)
  createLession(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): any {
    return this.lessonService.createLesson(createLessonInput);
  }
}
