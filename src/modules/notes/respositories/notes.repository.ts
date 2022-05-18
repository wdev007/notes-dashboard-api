import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Note } from '../schemas/note.schema';
import { CreateNoteDto } from '../dto/create-note.dto';
import { UpdateNoteDto } from '../dto/update-note.dto';

@Injectable()
export class NotesRepository {
  constructor(
    @InjectModel('Note')
    private readonly model: Model<Note>,
  ) {}

  async create(noteDto: CreateNoteDto) {
    this.model.create(noteDto);
  }

  async findAll() {
    return this.model.find().exec();
  }

  async update(id: string, noteDto: UpdateNoteDto) {
    this.model.findByIdAndUpdate(id, noteDto);
  }
}
