export interface RetieveUsuarioDtoInter {
    id:               string;
    nombre:           string;
    apellidos:        string;
    usuario:          string;
    contrasenia:      string;
    roles:            Role[];
}

export class RetieveUsuarioDto implements RetieveUsuarioDtoInter {
    id:               string;
    nombre:           string;
    apellidos:        string;
    usuario:          string;
    contrasenia:      string;
    roles:            Role[];

    constructor(){
    this.id = "",
    this.nombre= "",
    this.apellidos="",
    this.usuario="",
    this.contrasenia="",
    this.roles= []
    }
}

export interface RoleInt {
    nombre: string;
}

export class Role implements RoleInt{
    nombre: string;

    constructor() {
        this.nombre=""
    }

    
}


