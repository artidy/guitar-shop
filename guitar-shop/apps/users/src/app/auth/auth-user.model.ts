import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User, UserRole } from '@guitar-shop/shared-types';

@Schema({
  collection: 'users'
})
class AuthUserModel extends Document implements User {
  @Prop({
    unique: true,
    required: true,
  })
  public email: string;

  @Prop({
    required: true
  })
  public name: string;

  @Prop({
    required: true
  })
  public passwordHash: string;

  @Prop({
    required: true,
    type: String,
    enum: UserRole
  })
  public role: UserRole;
}

const AuthUserSchema = SchemaFactory.createForClass(AuthUserModel);

export {
  AuthUserModel,
  AuthUserSchema
}
