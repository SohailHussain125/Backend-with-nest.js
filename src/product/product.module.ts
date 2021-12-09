import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationSchema } from 'src/authentication/authentication.model';
import { AuthsModule } from 'src/authentication/authentication.module';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { jwtConstants } from 'src/authentication/constants';
import { JwtStrategy } from 'src/authentication/jwt.strategy';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports:[HttpModule,AuthsModule],
  controllers: [ProductController],
  providers:[ProductService]
})
export class ProductModule {}
