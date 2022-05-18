import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './modules/notes/notes.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL), NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
