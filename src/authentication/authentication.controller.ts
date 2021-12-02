import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { ResgistrationType, ResponseResgistrationType, loginType } from './dto/authentication.dto';
import { AuthenticationService } from './authentication.service'
@Controller()
export class AuthenticationController {
    constructor(private authenticationService: AuthenticationService) { }

    // SignUp end point
    @Post('/registeration')
    async registeration(
        @Body() body: ResgistrationType
    ) {
        const user = await this.authenticationService.registeration(body);
        return user;
    }


    // Login end point
    @Post('/login')
    async login(
        @Body() body: loginType
    ): Promise<loginType> {
        return this.authenticationService.login(body)
    }
}