import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from './schemas/note.schema';
import { NotesController } from './notes.controller';
import { NotesRepository } from './respositories/notes.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }])],
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
})
export class NotesModule {}
