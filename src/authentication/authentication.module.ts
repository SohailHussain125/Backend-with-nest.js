import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { Auth,AuthenticationSchema } from './authentication.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: AuthenticationSchema }])],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthsModule {}