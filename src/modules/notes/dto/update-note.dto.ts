import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateNoteDto } from './create-note.dto';

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
  @ApiProperty({
    example: '## Getting Started',
    description: 'The content of note',
  })
  content: string;

  @ApiProperty({ example: 1, description: 'The order of note' })
  display_order: number;
}
