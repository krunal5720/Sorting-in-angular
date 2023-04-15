import { BaseModel } from "./baseModel";

export class LoginModel extends BaseModel {
    emailAddress:string;
    password:string;
    constructor(){
        super();
        this.emailAddress='';
        this.password="";
    }
}