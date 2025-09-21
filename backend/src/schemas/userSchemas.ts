import { z } from "zod";

// Runtime schema
export const CreateUserSchema = z.object({
    name: z.string().min(2),
    nickname: z.string().min(1),
    gender: z.enum(["male", "female"]),
    birthday: z.coerce.date(),
    city: z.string().min(1),
    picture: z.string(),
    username: z.string().min(3),
    password: z.string().min(8),
});

// Type inferred from schema (no duplication!)
export type CreateUserBody = z.infer<typeof CreateUserSchema>;