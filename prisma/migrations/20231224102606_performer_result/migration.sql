/*
  Warnings:

  - You are about to drop the column `questions` on the `performersResults` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `performersResults` table. All the data in the column will be lost.
  - Added the required column `email` to the `performersResults` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "performersResults" DROP COLUMN "questions",
DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL;
