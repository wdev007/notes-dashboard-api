import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema()
export class Note {
  @Prop()
  content: string;

  @Prop()
  display_order: number;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
