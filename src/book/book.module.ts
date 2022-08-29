/* eslint-disable prettier/prettier */
import { Book, BookSchema } from './schema/Book';
import { Schema } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { models } from 'mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),AuthModule],
  //imports:[MongooseModule.forFeature(models:[{name :"", Schema:BookSchema}])]
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
