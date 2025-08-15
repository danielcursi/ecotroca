/*
  Warnings:

  - The values [RESERVADO,INDISPONIVEL] on the enum `StatusItem` will be removed. If these variants are still used in the database, this will fail.
  - The values [RECUSADA,CANCELADA] on the enum `StatusProposta` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `Categoria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_categoria` on the `Categoria` table. All the data in the column will be lost.
  - You are about to drop the column `nome_categoria` on the `Categoria` table. All the data in the column will be lost.
  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `data_publicacao` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `foto_uris` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `id_categoria` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `id_item` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario_proprietario` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `status_item` on the `Item` table. All the data in the column will be lost.
  - The primary key for the `Mensagem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `conteudo_mensagem` on the `Mensagem` table. All the data in the column will be lost.
  - You are about to drop the column `data_envio` on the `Mensagem` table. All the data in the column will be lost.
  - You are about to drop the column `id_mensagem` on the `Mensagem` table. All the data in the column will be lost.
  - You are about to drop the column `id_proposta_troca` on the `Mensagem` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario_remetente` on the `Mensagem` table. All the data in the column will be lost.
  - You are about to drop the column `lida` on the `Mensagem` table. All the data in the column will be lost.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `data_cadastro` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `senha_hash` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the `PropostaTroca` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nome]` on the table `Categoria` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome` to the `Categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoriaId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conteudo` to the `Mensagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remetenteId` to the `Mensagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trocaId` to the `Mensagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senhaHash` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."StatusMensagem" AS ENUM ('ENVIADA', 'LIDA', 'ARQUIVADA');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."StatusItem_new" AS ENUM ('DISPONIVEL', 'EM_NEGOCIACAO', 'TROCADO');
ALTER TABLE "public"."Item" ALTER COLUMN "status" TYPE "public"."StatusItem_new" USING ("status"::text::"public"."StatusItem_new");
ALTER TYPE "public"."StatusItem" RENAME TO "StatusItem_old";
ALTER TYPE "public"."StatusItem_new" RENAME TO "StatusItem";
DROP TYPE "public"."StatusItem_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."StatusProposta_new" AS ENUM ('PENDENTE', 'ACEITA', 'REJEITADA', 'CONCLUIDA');
ALTER TABLE "public"."Troca" ALTER COLUMN "status" TYPE "public"."StatusProposta_new" USING ("status"::text::"public"."StatusProposta_new");
ALTER TYPE "public"."StatusProposta" RENAME TO "StatusProposta_old";
ALTER TYPE "public"."StatusProposta_new" RENAME TO "StatusProposta";
DROP TYPE "public"."StatusProposta_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_id_categoria_fkey";

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_id_usuario_proprietario_fkey";

-- DropForeignKey
ALTER TABLE "public"."Mensagem" DROP CONSTRAINT "Mensagem_id_proposta_troca_fkey";

-- DropForeignKey
ALTER TABLE "public"."Mensagem" DROP CONSTRAINT "Mensagem_id_usuario_remetente_fkey";

-- DropForeignKey
ALTER TABLE "public"."PropostaTroca" DROP CONSTRAINT "PropostaTroca_id_item_desejado_fkey";

-- DropForeignKey
ALTER TABLE "public"."PropostaTroca" DROP CONSTRAINT "PropostaTroca_id_item_oferecido_fkey";

-- DropForeignKey
ALTER TABLE "public"."PropostaTroca" DROP CONSTRAINT "PropostaTroca_id_usuario_proponente_fkey";

-- AlterTable
ALTER TABLE "public"."Categoria" DROP CONSTRAINT "Categoria_pkey",
DROP COLUMN "id_categoria",
DROP COLUMN "nome_categoria",
ADD COLUMN     "categoriaPaiId" INTEGER,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_pkey",
DROP COLUMN "data_publicacao",
DROP COLUMN "foto_uris",
DROP COLUMN "id_categoria",
DROP COLUMN "id_item",
DROP COLUMN "id_usuario_proprietario",
DROP COLUMN "status_item",
ADD COLUMN     "categoriaId" INTEGER NOT NULL,
ADD COLUMN     "dataPublicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fotoUrls" TEXT,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "status" "public"."StatusItem" NOT NULL,
ADD COLUMN     "usuarioId" INTEGER NOT NULL,
ALTER COLUMN "descricao" DROP NOT NULL,
ALTER COLUMN "condicao" DROP NOT NULL,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Mensagem" DROP CONSTRAINT "Mensagem_pkey",
DROP COLUMN "conteudo_mensagem",
DROP COLUMN "data_envio",
DROP COLUMN "id_mensagem",
DROP COLUMN "id_proposta_troca",
DROP COLUMN "id_usuario_remetente",
DROP COLUMN "lida",
ADD COLUMN     "conteudo" TEXT NOT NULL,
ADD COLUMN     "dataEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "remetenteId" INTEGER NOT NULL,
ADD COLUMN     "status" "public"."StatusMensagem" NOT NULL DEFAULT 'ENVIADA',
ADD COLUMN     "trocaId" INTEGER NOT NULL,
ADD CONSTRAINT "Mensagem_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Usuario" DROP CONSTRAINT "Usuario_pkey",
DROP COLUMN "data_cadastro",
DROP COLUMN "id_usuario",
DROP COLUMN "senha_hash",
ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "senhaHash" TEXT NOT NULL,
ALTER COLUMN "telefone" DROP NOT NULL,
ALTER COLUMN "cidade" DROP NOT NULL,
ALTER COLUMN "bairro" DROP NOT NULL,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "public"."PropostaTroca";

-- CreateTable
CREATE TABLE "public"."Troca" (
    "id" SERIAL NOT NULL,
    "itemOferecidoId" INTEGER NOT NULL,
    "itemDesejadoId" INTEGER NOT NULL,
    "usuarioProponenteId" INTEGER NOT NULL,
    "usuarioRecebedorId" INTEGER NOT NULL,
    "dataProposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "public"."StatusProposta" NOT NULL,
    "observacoes" TEXT,
    "dataConclusao" TIMESTAMP(3),

    CONSTRAINT "Troca_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nome_key" ON "public"."Categoria"("nome");

-- AddForeignKey
ALTER TABLE "public"."Categoria" ADD CONSTRAINT "Categoria_categoriaPaiId_fkey" FOREIGN KEY ("categoriaPaiId") REFERENCES "public"."Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "public"."Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Troca" ADD CONSTRAINT "Troca_itemOferecidoId_fkey" FOREIGN KEY ("itemOferecidoId") REFERENCES "public"."Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Troca" ADD CONSTRAINT "Troca_itemDesejadoId_fkey" FOREIGN KEY ("itemDesejadoId") REFERENCES "public"."Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Troca" ADD CONSTRAINT "Troca_usuarioProponenteId_fkey" FOREIGN KEY ("usuarioProponenteId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Troca" ADD CONSTRAINT "Troca_usuarioRecebedorId_fkey" FOREIGN KEY ("usuarioRecebedorId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Mensagem" ADD CONSTRAINT "Mensagem_trocaId_fkey" FOREIGN KEY ("trocaId") REFERENCES "public"."Troca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Mensagem" ADD CONSTRAINT "Mensagem_remetenteId_fkey" FOREIGN KEY ("remetenteId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
