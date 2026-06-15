import type { signupSchema } from "@/schema/signupSchema";
import type z from "zod";

type User=z.infer<typeof signupSchema>

export function getUser():User[]{
    console.log('get user called');
    const users=localStorage.getItem('USER');
    console.log(users);
    return users?JSON.parse(users):[];
}

export function saveUser(newUser:User){
    console.log('data saved');
    
    const users=getUser();
    const duplicate=users.find((obj)=>(
        obj.email===newUser.email
    ))
    if(duplicate){
        alert('email already register');
        return;
    }
    users.push(newUser)
    localStorage.setItem('USER',JSON.stringify(users));
}


