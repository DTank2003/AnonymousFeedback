import { z } from "zod";

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, {message: "Content must be of atleast 10 characters"})
    .max(100, { message: "Content can be of 100 characters maximum" })
    
})