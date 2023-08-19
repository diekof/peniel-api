-- CreateTable
CREATE TABLE "agendamento" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "data" BIGINT NOT NULL,
    "pessoaId" UUID NOT NULL,
    "tipoConsulta" UUID NOT NULL,
    "isCompareceu" BOOLEAN NOT NULL,

    CONSTRAINT "agendamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consulta" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "data" DATE NOT NULL,
    "pessoaId" UUID NOT NULL,
    "situacao" VARCHAR(255) NOT NULL,
    "isRetorno" BOOLEAN NOT NULL,
    "obervacao" VARCHAR(255) NOT NULL,
    "tipoExame" UUID NOT NULL,
    "medicoId" UUID NOT NULL,
    "agendamentoId" UUID NOT NULL,

    CONSTRAINT "consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consultaPos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "consultaId" BIGINT NOT NULL,
    "isAjuda" BOOLEAN NOT NULL,
    "isVisita" BOOLEAN NOT NULL,
    "observacao" TEXT NOT NULL,

    CONSTRAINT "consultaPos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medico" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "crm" VARCHAR(255) NOT NULL,

    CONSTRAINT "medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pessoa" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" VARCHAR(255),
    "cpf" VARCHAR(255) NOT NULL,
    "dataNascimento" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cartaoSus" VARCHAR(255) NOT NULL,
    "endRua" VARCHAR(255) NOT NULL,
    "endBairro" VARCHAR(255) NOT NULL,
    "endNumero" VARCHAR(255) NOT NULL,
    "endCidade" VARCHAR(255) NOT NULL,
    "endEstado" VARCHAR(255) NOT NULL,
    "endCep" VARCHAR(255) NOT NULL,

    CONSTRAINT "pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pessoaContato" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" VARCHAR(255) NOT NULL,
    "isPrincipal" BOOLEAN NOT NULL,
    "tipo" BIGINT NOT NULL,
    "pessoaId" UUID NOT NULL,

    CONSTRAINT "pessoaContato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" VARCHAR(255) NOT NULL,
    "isAtivo" BOOLEAN NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoConsulta" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" VARCHAR(255) NOT NULL,
    "isAtivo" BOOLEAN NOT NULL,

    CONSTRAINT "tipoConsulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoExame" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nome" VARCHAR(255) NOT NULL,
    "isAtivo" BOOLEAN NOT NULL,

    CONSTRAINT "tipoExame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "login" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "isAtivo" BOOLEAN NOT NULL,
    "pessoaId" UUID NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarioRole" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "roleId" UUID NOT NULL,
    "usuarioId" UUID NOT NULL,

    CONSTRAINT "usuarioRole_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "agendamento" ADD CONSTRAINT "agendamento_pessoaid_foreign" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "agendamento" ADD CONSTRAINT "agendamento_tipoconsulta_foreign" FOREIGN KEY ("tipoConsulta") REFERENCES "tipoConsulta"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_agendamentoid_foreign" FOREIGN KEY ("agendamentoId") REFERENCES "agendamento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_medicoid_foreign" FOREIGN KEY ("medicoId") REFERENCES "medico"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_pessoaid_foreign" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_tipoexame_foreign" FOREIGN KEY ("tipoExame") REFERENCES "tipoExame"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "consultaPos" ADD CONSTRAINT "consultapos_id_foreign" FOREIGN KEY ("id") REFERENCES "consulta"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "medico" ADD CONSTRAINT "medico_id_foreign" FOREIGN KEY ("id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pessoaContato" ADD CONSTRAINT "pessoacontato_pessoaid_foreign" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_pessoaid_foreign" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuarioRole" ADD CONSTRAINT "usuariorole_roleid_foreign" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuarioRole" ADD CONSTRAINT "usuariorole_usuarioid_foreign" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
