import { IsNotEmpty } from "class-validator";

export class ResgistrationType {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    password: string;
}

export class ResponseResgistrationType {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    hash?: string

}

export class loginType {
    @IsNotEmpty()
    userName: string;
    @IsNotEmpty()
    password: string
}
