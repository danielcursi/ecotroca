/*
  Warnings:

  - A unique constraint covering the columns `[id_item_oferecido,id_item_desejado,id_usuario_proponente,status_proposta]` on the table `PropostaTroca` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."PropostaTroca" ALTER COLUMN "status_proposta" SET DEFAULT 'PENDENTE';

-- CreateIndex
CREATE INDEX "Item_status_item_idx" ON "public"."Item"("status_item");

-- CreateIndex
CREATE INDEX "Mensagem_id_proposta_troca_lida_idx" ON "public"."Mensagem"("id_proposta_troca", "lida");

-- CreateIndex
CREATE INDEX "PropostaTroca_status_proposta_idx" ON "public"."PropostaTroca"("status_proposta");

-- CreateIndex
CREATE UNIQUE INDEX "PropostaTroca_id_item_oferecido_id_item_desejado_id_usuario_key" ON "public"."PropostaTroca"("id_item_oferecido", "id_item_desejado", "id_usuario_proponente", "status_proposta");
