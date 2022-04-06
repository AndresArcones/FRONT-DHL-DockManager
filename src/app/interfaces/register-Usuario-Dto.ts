import { Role } from "./retrieve-usuario-dto";

export interface RegisterUsuarioDtoInter {
    nombre:           string;
    apellidos:        string;
    usuario:          string;
    contrasenia:      string;
}

export class RegisterUsuarioDto implements RegisterUsuarioDtoInter {
    nombre:           string;
    apellidos:        string;
    usuario:          string;
    contrasenia:      string;
    roles:            Role[];

    constructor(){
    this.nombre=""
    this.apellidos=""
    this.usuario=""
    this.contrasenia=""
    this.roles=[]
    }
}