import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";
import { CreateUserSchema, CreateUserBody } from "../schemas/userSchemas.js";


const prisma = new PrismaClient();

export const addUser = async (req: Request<{}, {}, CreateUserBody>, res: Response) => {
    try {
        const parsed = CreateUserSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Validation failed",
                errors: parsed.error.issues, // array of { path, message, code }
            });
        }
        const { password, birthday, ...rest } = parsed.data;
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = await prisma.user.create({
            data: { ...rest, birthday, password: hashedPassword },
            select: {
                id: true,
                createdAt: true,
                name: true,
                nickname: true,
                gender: true,
                birthday: true,
                city: true,
                picture: true,
                username: true,
            }
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: "Failed to create user" });
    }
}