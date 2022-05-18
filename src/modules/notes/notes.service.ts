import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesRepository } from './respositories/notes.repository';

@Injectable()
export class NotesService {
  constructor(private readonly repository: NotesRepository) {}

  create(createNoteDto: CreateNoteDto) {
    return this.repository.create(createNoteDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    return this.repository.update(id, updateNoteDto);
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
