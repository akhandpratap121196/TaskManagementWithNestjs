/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BookDocument=Book&Document;
/* eslint-disable prettier/prettier */
@Schema()
export class Book{
    @Prop()
    title:string;
    @Prop()
    author:string;
    @Prop()
    published:number;
}
export const BookSchema=SchemaFactory.createForClass(Book);