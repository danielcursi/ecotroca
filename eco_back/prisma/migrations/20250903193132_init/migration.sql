-- CreateEnum
CREATE TYPE "public"."StatusItem" AS ENUM ('DISPONIVEL', 'RESERVADO', 'INDISPONIVEL');

-- CreateEnum
CREATE TYPE "public"."StatusProposta" AS ENUM ('PENDENTE', 'ACEITA', 'RECUSADA', 'CANCELADA');

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "data_cadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "public"."Item" (
    "id_item" SERIAL NOT NULL,
    "id_usuario_proprietario" INTEGER NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "condicao" TEXT NOT NULL,
    "foto_uris" TEXT NOT NULL,
    "data_publicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status_item" "public"."StatusItem" NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id_item")
);

-- CreateTable
CREATE TABLE "public"."Categoria" (
    "id_categoria" SERIAL NOT NULL,
    "nome_categoria" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "public"."PropostaTroca" (
    "id_proposta" SERIAL NOT NULL,
    "id_item_oferecido" INTEGER NOT NULL,
    "id_item_desejado" INTEGER NOT NULL,
    "id_usuario_proponente" INTEGER NOT NULL,
    "status_proposta" "public"."StatusProposta" NOT NULL,
    "data_proposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao_status" TIMESTAMP(3),

    CONSTRAINT "PropostaTroca_pkey" PRIMARY KEY ("id_proposta")
);

-- CreateTable
CREATE TABLE "public"."Mensagem" (
    "id_mensagem" SERIAL NOT NULL,
    "id_proposta_troca" INTEGER NOT NULL,
    "id_usuario_remetente" INTEGER NOT NULL,
    "conteudo_mensagem" TEXT NOT NULL,
    "data_envio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lida" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Mensagem_pkey" PRIMARY KEY ("id_mensagem")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_id_usuario_proprietario_fkey" FOREIGN KEY ("id_usuario_proprietario") REFERENCES "public"."Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "public"."Categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PropostaTroca" ADD CONSTRAINT "PropostaTroca_id_item_oferecido_fkey" FOREIGN KEY ("id_item_oferecido") REFERENCES "public"."Item"("id_item") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PropostaTroca" ADD CONSTRAINT "PropostaTroca_id_item_desejado_fkey" FOREIGN KEY ("id_item_desejado") REFERENCES "public"."Item"("id_item") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PropostaTroca" ADD CONSTRAINT "PropostaTroca_id_usuario_proponente_fkey" FOREIGN KEY ("id_usuario_proponente") REFERENCES "public"."Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Mensagem" ADD CONSTRAINT "Mensagem_id_proposta_troca_fkey" FOREIGN KEY ("id_proposta_troca") REFERENCES "public"."PropostaTroca"("id_proposta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Mensagem" ADD CONSTRAINT "Mensagem_id_usuario_remetente_fkey" FOREIGN KEY ("id_usuario_remetente") REFERENCES "public"."Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
