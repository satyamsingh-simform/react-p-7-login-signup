import {z} from 'zod'

export const signupSchema=z.object({
    name:z.string().min(2,'min 2 char must').max(50,'max 50 char allowed'),
    lastName:z.string().min(2,'min 2 char must').max(50,'max 50 char allowed'),
    email:z.email().max(50,'max 50 char allowed'),
    city:z.string().min(2,'min 2 char must').max(50,'max 50 char allowed'),
    state:z.string().min(2,'min 2 char must').max(50,'max 50 char allowed'),
    address:z.string().min(2,'min 2 char must').max(50,'max 50 char allowed'),
    age:z.number({ error: "Age is required" }).min(12,'min age must be 12').max(100,'max age must be 100').optional(),
    gender:z.string(),
    contact:z.string().min(10, "Phone number must be 10 digits").max(10, "Phone number must be 10 digits"),
    dob:z.string().min(1,'date of birth is required'),
    password:z.string().min(8,'min 8 char required').max(100,'max 100 char only'),
    confirm:z.string().min(8,'min 8 char required').max(100,'max 100 char only'),
})
.refine((data)=>data.password===data.confirm,{
    error:'password does not match',
    path:['confirm']
})