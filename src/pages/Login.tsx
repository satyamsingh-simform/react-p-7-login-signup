import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/InputField";
import { useAuth } from "@/hook/useAuth";
import { loginSchema } from "@/schema/loginSchema";
import { getUser } from "@/utils/localStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import {z} from 'zod';

type LoginFormData=z.infer<typeof loginSchema> 

export default function Login(){

    const navigate=useNavigate();
    const {login}=useAuth();

    const {register,handleSubmit,formState:{errors}}=useForm<LoginFormData>({
        resolver:zodResolver(loginSchema)
    })

    function submit(data:LoginFormData){
        console.log(data);
        const users=getUser();
        const userFound=users.find((user)=>(
            user.email===data.email && user.password===data.password
        ))
        if(!userFound){
            alert('user does not exist');
            return;
        }
        console.log('matched-->',userFound);
        login(userFound)
        navigate('/profile');
    }
    return(
        <div className="min-h-screen flex flex-col gap-5 justify-center items-center p-10 border-2 border-red-500">
        <form onSubmit={handleSubmit(submit)}>
            <h1 className="text-2xl text-center pb-5">Login</h1>
            <div className="px-10 py-15 w-100 flex flex-col gap-5 border rounded-2xl shadow-2xl">
            <InputField
                {...register('email')}
                label="Email"   
                type="email"
                placeholder="enter you e-mail"
                error={errors.email && errors.email.message}
            />
            <InputField
                {...register('password')}
                label="Password"
                type="password"
                placeholder="enter your password"
                error={errors.password && errors.password.message}
            />
            <Button className="p-5">Login</Button>
             <div className="flex justify-end gap-5 px-10 text-blue-600 hover:underline">
                <Link to='/signup'>Signup</Link>
            </div>
            </div>
        </form>
        </div>
    )
}