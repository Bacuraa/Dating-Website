-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('male', 'female');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "city" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
