import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty({
    example: '## Getting Started',
    description: 'The content of note',
    required: true,
  })
  content: string;

  @ApiProperty({ example: 1, description: 'The order of note', required: true })
  display_order: number;
}
