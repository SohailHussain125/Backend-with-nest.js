import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../authentication/jwt-auth.guard';

@Controller('product')
export class ProductController {

    @UseGuards(JwtAuthGuard)
    @Get('all')
    getAllProduct() {
        return [
            {
                id: "1",
                name: "Mobile"
            },
            {
                id: "2",
                name: "Mobile X"
            }
        ]
    }
}
