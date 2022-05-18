import * as moment from 'moment-timezone';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

moment.locale('pt-br');

export type NoteDocument = Note & Document;

@Schema()
export class Note {
  @Prop()
  content: string;

  @Prop()
  display_order: number;

  @Prop({
    default: moment().utc().toDate(),
    // .tz('America/Sao_Paulo'),
  })
  created_at: Date;

  @Prop({
    default: null,
  })
  updated_at: Date;

  @Prop({
    default: null,
  })
  deleted_at: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
