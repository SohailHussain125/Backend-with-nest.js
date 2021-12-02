import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Auth & Document;

@Schema()
export class Auth {
  
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  userName: string;

  
  @Prop()
  hash: string;
}

export const AuthenticationSchema = SchemaFactory.createForClass(Auth);