import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/InputField";
import { loginSchema } from "@/schema/loginSchema";
import { getUser } from "@/utils/localStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from 'zod';

type LoginFormData=z.infer<typeof loginSchema> 

export default function Login(){
    const {register,handleSubmit,formState:{errors}}=useForm<LoginFormData>({
        resolver:zodResolver(loginSchema)
    })

    function submit(data:LoginFormData){
        console.log(data);
        getUser();
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
             <div className="flex justify-end gap-5 px-10 ">
                <a href="/">signup</a>
            </div>
            </div>
        </form>
        </div>
    )
}