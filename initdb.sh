#!/bin/bash
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -d "$POSTGRES_DB"  <<-EOSQL
CREATE TABLE "usuario"(
    "id" UUID NOT NULL,
    "login" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "isAtivo" BOOLEAN NOT NULL,
    "pessoaId" UUID NOT NULL
);
ALTER TABLE
    "usuario" ADD PRIMARY KEY("id");
CREATE TABLE "medico"(
    "id" UUID NOT NULL,
    "crm" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "medico" ADD PRIMARY KEY("id");
CREATE TABLE "usuarioRole"(
    "id" UUID NOT NULL,
    "roleId" UUID NOT NULL,
    "usuarioId" UUID NOT NULL
);
ALTER TABLE
    "usuarioRole" ADD PRIMARY KEY("id");
CREATE TABLE "tipoExame"(
    "id" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "isAtivo" BOOLEAN NOT NULL
);
ALTER TABLE
    "tipoExame" ADD PRIMARY KEY("id");
CREATE TABLE "consultaPos"(
    "id" UUID NOT NULL,
    "consultaId" BIGINT NOT NULL,
    "isAjuda" BOOLEAN NOT NULL,
    "isVisita" BOOLEAN NOT NULL,
    "observacao" TEXT NOT NULL
);
ALTER TABLE
    "consultaPos" ADD PRIMARY KEY("id");
CREATE TABLE "role"(
    "id" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "isAtivo" BOOLEAN NOT NULL
);
ALTER TABLE
    "role" ADD PRIMARY KEY("id");
CREATE TABLE "pessoa"(
    "id" UUID NOT NULL,
    "nome" VARCHAR(255) NULL,
    "cpf" VARCHAR(255) NOT NULL,
    "dataNascimento" DATE NOT NULL,
    "cartaoSus" VARCHAR(255) NOT NULL,
    "endRua" VARCHAR(255) NOT NULL,
    "endBairro" VARCHAR(255) NOT NULL,
    "endNumero" VARCHAR(255) NOT NULL,
    "endCidade" VARCHAR(255) NOT NULL,
    "endEstado" VARCHAR(255) NOT NULL,
    "endCep" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "pessoa" ADD PRIMARY KEY("id");
CREATE TABLE "agendamento"(
    "id" UUID NOT NULL,
    "data" BIGINT NOT NULL,
    "pessoaId" UUID NOT NULL,
    "tipoConsulta" UUID NOT NULL,
    "isCompareceu" BOOLEAN NOT NULL
);
ALTER TABLE
    "agendamento" ADD PRIMARY KEY("id");
CREATE TABLE "tipoConsulta"(
    "id" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "isAtivo" BOOLEAN NOT NULL
);
ALTER TABLE
    "tipoConsulta" ADD PRIMARY KEY("id");
CREATE TABLE "pessoaContato"(
    "id" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "isPrincipal" BOOLEAN NOT NULL,
    "tipo" BIGINT NOT NULL,
    "pessoaId" UUID NOT NULL
);
ALTER TABLE
    "pessoaContato" ADD PRIMARY KEY("id");
CREATE TABLE "consulta"(
    "id" UUID NOT NULL,
    "data" DATE NOT NULL,
    "pessoaId" UUID NOT NULL,
    "situacao" VARCHAR(255) NOT NULL,
    "isRetorno" BOOLEAN NOT NULL,
    "obervacao" VARCHAR(255) NOT NULL,
    "tipoExame" UUID NOT NULL,
    "medicoId" UUID NOT NULL,
    "agendamentoId" UUID NOT NULL
);
ALTER TABLE
    "consulta" ADD PRIMARY KEY("id");
ALTER TABLE
    "usuarioRole" ADD CONSTRAINT "usuariorole_roleid_foreign" FOREIGN KEY("roleId") REFERENCES "role"("id");
ALTER TABLE
    "consulta" ADD CONSTRAINT "consulta_agendamentoid_foreign" FOREIGN KEY("agendamentoId") REFERENCES "agendamento"("id");
ALTER TABLE
    "consulta" ADD CONSTRAINT "consulta_medicoid_foreign" FOREIGN KEY("medicoId") REFERENCES "medico"("id");
ALTER TABLE
    "consulta" ADD CONSTRAINT "consulta_tipoexame_foreign" FOREIGN KEY("tipoExame") REFERENCES "tipoExame"("id");
ALTER TABLE
    "agendamento" ADD CONSTRAINT "agendamento_tipoconsulta_foreign" FOREIGN KEY("tipoConsulta") REFERENCES "tipoConsulta"("id");
ALTER TABLE
    "usuarioRole" ADD CONSTRAINT "usuariorole_usuarioid_foreign" FOREIGN KEY("usuarioId") REFERENCES "usuario"("id");
ALTER TABLE
    "medico" ADD CONSTRAINT "medico_id_foreign" FOREIGN KEY("id") REFERENCES "pessoa"("id");
ALTER TABLE
    "pessoaContato" ADD CONSTRAINT "pessoacontato_pessoaid_foreign" FOREIGN KEY("pessoaId") REFERENCES "pessoa"("id");
ALTER TABLE
    "consulta" ADD CONSTRAINT "consulta_pessoaid_foreign" FOREIGN KEY("pessoaId") REFERENCES "pessoa"("id");
ALTER TABLE
    "consultaPos" ADD CONSTRAINT "consultapos_id_foreign" FOREIGN KEY("id") REFERENCES "consulta"("id");
ALTER TABLE
    "usuario" ADD CONSTRAINT "usuario_pessoaid_foreign" FOREIGN KEY("pessoaId") REFERENCES "pessoa"("id");
ALTER TABLE
    "agendamento" ADD CONSTRAINT "agendamento_pessoaid_foreign" FOREIGN KEY("pessoaId") REFERENCES "pessoa"("id");
EOSQL