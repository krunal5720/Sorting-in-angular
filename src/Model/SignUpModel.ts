import { BaseModel } from "./baseModel";

export class SignUpModel extends BaseModel {
    userName:string;
    emailAddress:string;
    password:string;
    confirmPassword:string;
    constructor(){
        super();
        this.userName='';
        this.emailAddress='';
        this.password="";
        this.confirmPassword="";
    }
}