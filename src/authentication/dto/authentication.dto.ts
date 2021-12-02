export class ResgistrationType {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}

export class ResponseResgistrationType {
    _id:string;
    firstName: string;
    lastName: string;
    userName: string;
    hash?:string

}

export class loginType{
    userName:string;
    password:string
}
