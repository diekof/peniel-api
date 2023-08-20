import { agendamento as _agendamento } from './agendamento';
import { consulta as _consulta } from './consulta';
import { consultaPos as _consultaPos } from './consulta_pos';
import { medico as _medico } from './medico';
import { pessoa as _pessoa } from './pessoa';
import { pessoaContato as _pessoaContato } from './pessoa_contato';
import { role as _role } from './role';
import { tipoConsulta as _tipoConsulta } from './tipo_consulta';
import { tipoExame as _tipoExame } from './tipo_exame';
import { usuario as _usuario } from './usuario';
import { usuarioRole as _usuarioRole } from './usuario_role';

export namespace PrismaModel {
  export class agendamento extends _agendamento {}
  export class consulta extends _consulta {}
  export class consultaPos extends _consultaPos {}
  export class medico extends _medico {}
  export class pessoa extends _pessoa {}
  export class pessoaContato extends _pessoaContato {}
  export class role extends _role {}
  export class tipoConsulta extends _tipoConsulta {}
  export class tipoExame extends _tipoExame {}
  export class usuario extends _usuario {}
  export class usuarioRole extends _usuarioRole {}

  export const extraModels = [
    agendamento,
    consulta,
    consultaPos,
    medico,
    pessoa,
    pessoaContato,
    role,
    tipoConsulta,
    tipoExame,
    usuario,
    usuarioRole,
  ];
}
