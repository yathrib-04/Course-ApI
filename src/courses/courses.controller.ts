import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import type { Course } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll(): Course[] {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Course {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto): Course {
    return this.coursesService.create(createCourseDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<CreateCourseDto>,
  ): Course {
    return this.coursesService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): { message: string } {
    return this.coursesService.remove(id);
  }
}