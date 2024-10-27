/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Clash" DROP CONSTRAINT "Clash_user_id_fkey";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Clash_User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "password_reset_token" TEXT,
    "token_send_at" TIMESTAMP(3),
    "email_verified_at" TIMESTAMP(3),
    "email_verify_token" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Clash_User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clash_User_email_key" ON "Clash_User"("email");

-- CreateIndex
CREATE INDEX "Clash_User_name_idx" ON "Clash_User"("name");

-- AddForeignKey
ALTER TABLE "Clash" ADD CONSTRAINT "Clash_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Clash_User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
