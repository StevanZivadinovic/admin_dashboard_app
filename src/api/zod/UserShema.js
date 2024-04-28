import { z } from 'zod';

const userSchema = z.object({
  username: z.string()
    .min(3, 'Username must be at least 3 characters long!')
    .max(50, 'Username cannot be longer than 50 characters!'),
  email: z.string()
    .email('Invalid email format!')
    .max(50, 'Email cannot be longer than 50 characters!'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters long!'),
  img: z.string().optional(),
  isAdmin: z.string().optional(),
  isActive: z.string().optional(),
  phone: z.number().min(9, 'Number must be at least 9 characters long!'),
  address: z.string().optional(),
});

export default userSchema;