import {z} from 'zod'

export const loginSchema=z.object({
    email:z.email('invalid email format').max(100,'max 100 char allowed'),
    password:z.string().min(8,'min 8 char required').max(100,'max 100 char only'),
})