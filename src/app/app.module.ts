import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthsModule } from 'src/authentication/authentication.module';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [AuthsModule, ProductModule,
    MongooseModule.forRoot("mongodb+srv://user:Q3JzizdgvdmhbOgI@cluster0.wcwi2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority") ],
  controllers:[],
  providers:[]
})
export class AppModule {}
