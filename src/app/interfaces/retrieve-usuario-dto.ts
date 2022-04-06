export interface RetieveUsuarioDtoInter {
    id:               string;
    nombre:           string;
    apellidos:        string;
    usuario:          string;
    contrasenia:      string;
    roles:            Role[];
    idVideos:         string[];
    idVideosLiked:    any[];
    idVideosDisliked: any[];
}

export class RetieveUsuarioDto implements RetieveUsuarioDtoInter {
    id:               string;
    nombre:           string;
    apellidos:        string;
    usuario:          string;
    contrasenia:      string;
    roles:            Role[];
    idVideos:         string[];
    idVideosLiked:    any[];
    idVideosDisliked: any[];

    constructor(){
    this.id = "",
    this.nombre= "",
    this.apellidos="",
    this.usuario="",
    this.contrasenia="",
    this.roles= [],
    this.idVideos=[],
    this.idVideosLiked= [],
    this.idVideosDisliked= []
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


