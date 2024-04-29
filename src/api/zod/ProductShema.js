import { z } from 'zod';

 const productSchema = z.object({
    title: z.string().min(3, 'Title is minimum 3 characters!'),
    desc: z.string().min(10,  'Description is minimum 10 characters!'),
    price: z.number().min(1),
    stock: z.number().min(0),
    img: z.string().optional(),
    color: z.string().optional(),
    size: z.string().optional(),
}).strict();

export default productSchema;
