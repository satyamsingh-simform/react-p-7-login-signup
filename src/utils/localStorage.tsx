import type { signupSchema } from "@/schema/signupSchema";
import type z from "zod";

type User=z.infer<typeof signupSchema>

export function getUser():User[]{
    const users=localStorage.getItem('USER');
    return users?JSON.parse(users):[];
}

export function saveUser(newUser:User){
    
    const users=getUser();
    const duplicate=users.find((obj)=>(
        obj.email===newUser.email
    ))
    if(duplicate){
        alert('email already register');
        throw new Error('email already register')
    }
    users.push(newUser)
    localStorage.setItem('USER',JSON.stringify(users));
}


