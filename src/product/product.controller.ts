import { Controller, Get, Headers, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../authentication/jwt-auth.guard';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @UseGuards(JwtAuthGuard)
    @Get('all')
    getAllProduct(@Headers() headers) {        
        return this.productService.getAllProduct()
     }
}
