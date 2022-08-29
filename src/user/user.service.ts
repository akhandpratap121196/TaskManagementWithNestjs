/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
@Injectable()
export class UserService{
    public users : User[]=[
        {
           username:"User1",
           password:"admin",
           email:"user1@gmail.com",
           age:20
    },
    {
        username:"User2",
        password:"admin1",
        email:"user2@gmail.com",
        age:30
 },  {
    username:"User3",
    password:"admin2",
    email:"user3@gmail.com",
    age:40
}
];
getUserByUserName(userName:string) : User{
    return this.users.find((user:User)=>user.username===userName)
}
}


