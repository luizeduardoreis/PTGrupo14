/*
  Warnings:

  - The `post_id` column on the `comments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `user_id` column on the `comments` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "comments" DROP COLUMN "post_id",
ADD COLUMN     "post_id" SERIAL NOT NULL,
DROP COLUMN "user_id",
ADD COLUMN     "user_id" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "gender" SET DATA TYPE CHAR;
