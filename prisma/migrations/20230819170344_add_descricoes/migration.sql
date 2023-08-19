/*
  Warnings:

  - Added the required column `descricao` to the `tipoExame` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tipoExame" ADD COLUMN     "descricao" VARCHAR(255) NOT NULL;
