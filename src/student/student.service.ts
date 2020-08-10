import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async getStudents(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async getStudentById(id: string): Promise<Student> {
    const student = await this.studentRepository.findOne(id);

    if (!student) {
      throw new NotFoundException();
    }

    return student;
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const newStudent = this.studentRepository.create({
      firstName,
      lastName,
    });
    return await this.studentRepository.save(newStudent);
  }
}
