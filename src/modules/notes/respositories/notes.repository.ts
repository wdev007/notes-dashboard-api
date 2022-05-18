import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Note } from '../schemas/note.schema';

@Injectable()
export class NotesRepository {
  constructor(
    @InjectModel('Note')
    private readonly model: Model<Note>,
  ) {}

  save() {
    this.model.create({
      content: 'teste',
      created_at: new Date(),
      updated_at: null,
      display_order: 1,
    });
  }

  findAll() {
    return this.model.find().exec();
  }
}
