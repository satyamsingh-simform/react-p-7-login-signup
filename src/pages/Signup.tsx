import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/InputField";
import { SelectField } from "@/components/ui/SelectField";
import { signupSchema } from "@/schema/signupSchema";
import { GENDER_OPTIONS } from "@/utils/constants";
import { saveUser } from "@/utils/localStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import type z from "zod";

type SignupFormData=z.infer<typeof signupSchema>

export default function Signup() {
  const { register, handleSubmit, reset, control, formState: { errors },} = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const navigate=useNavigate()

  function submit(data:SignupFormData){
    console.log(data);
    saveUser(data);
    console.log('still running')
    navigate('/login')
    reset();
  }

  return(
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center p-10 border-2 border-red-500">
    <h1 className="text-2xl">SignUp</h1>
    <form onSubmit={handleSubmit(submit)}>
        <div className="p-5 w-150 flex flex-col gap-5 border rounded-2xl shadow-2xl">
            <div className="flex gap-2">
                <InputField
                    {...register('name')}
                    label="Name"
                    type="text"
                    placeholder="enter your name"
                    error={errors.name && errors.name.message}
                />
                <InputField
                    {...register('lastName')}
                    label="Last Name"
                    type="text"
                    placeholder="enter your name"
                    error={errors.lastName && errors.lastName.message}
                />
            </div>
            
            <InputField
                {...register('email')}
                label="Email"
                type="email"
                placeholder="enter your name"
                error={errors.email && errors.email.message}
            />
            <div className="flex gap-2">
                <InputField
                    {...register('city')}
                    label="City"
                    type="text"
                    placeholder="enter your name"
                    error={errors.city && errors.city.message}
                />
                <InputField
                    {...register('state')}
                    label="State"
                    type="text"
                    placeholder="enter your name"
                    error={errors.state && errors.state.message}
                />
            </div>
            
            <InputField
                {...register('address')}
                label="Address"
                type="text"
                placeholder="enter your name"
                error={errors.address && errors.address.message}
            />
            <div className="flex gap-2">
                <InputField
                {...register('age',{valueAsNumber:true})}
                label="Age"
                type="number"
                placeholder="enter your name"
                error={errors.age && errors.age.message}
                />
                <SelectField
                   control={control}
                   name={"gender"}
                   label="Gender"
                   placeholder="Select your gender"
                   error={errors.gender?.message}
                   options={GENDER_OPTIONS}
                />
            </div>
            
            <div className="flex gap-2">
                <InputField
                {...register('contact')}
                label="Contact Number"
                type="text"
                placeholder="enter your name"
                error={errors.contact && errors.contact.message}
                />
                <InputField
                    {...register('dob')}
                    label="Date of Birth"
                    type="date"
                    placeholder="enter your name"
                    error={errors.dob && errors.dob.message}
                />
            </div>
            
            <InputField
                {...register('password')}
                label="Password"
                type="password"
                placeholder="enter your name"
                error={errors.password && errors.password.message}
            />
            <InputField
                {...register('confirm')}
                label="confirm Password"
                type="password"
                placeholder="enter your name"
                error={errors.confirm && errors.confirm.message}
            />
            <Button className="p-5">submit</Button>
            <div className="flex justify-end gap-5 px-10 ">
                <span className="decoration-solid">already have an account</span>
                <Link className="text-blue-600 hover:underline" to='/login'>Login</Link>
            </div>
        </div>
    </form>
    </div>
  );
}
