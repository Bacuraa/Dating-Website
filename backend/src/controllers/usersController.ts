import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";

type CreateUserBody = {
    name: string;
    nickname: string;
    gender: "male" | "female"; // match your enum in schema.prisma
    birthday: string;          // ISO string from client, will convert to Date
    city: string;
    picture: string;
    username: string;
    password: string;
}

const prisma = new PrismaClient();

export const addUser = async (req: Request<{}, {}, CreateUserBody>, res: Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                nickname: req.body.nickname,
                gender: req.body.gender,
                birthday: new Date(req.body.birthday),
                city: req.body.city,
                picture: req.body.picture,
                username: req.body.username,
                password: hashedPassword,
            },
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