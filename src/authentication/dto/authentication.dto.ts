import { IsNotEmpty, IsString, Matches, MaxLength, MinLength} from "class-validator";

export class ResgistrationType {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    userName: string;

    
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
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


export class loginTypeResponse {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
}