export interface MuelleInt {
    id: string
    tipoMuelle: string;
    tipoCamion: string;
    horario: string;
    estado: string;

}

export class Muelle implements MuelleInt {
    id: string;
    tipoMuelle: string;
    tipoCamion: string;
    horario: string;
    estado: string;
    reservas: Reserva[]

    constructor() {
        this.id = ""
        this.tipoMuelle = ""
        this.tipoCamion = ""
        this.horario = ""
        this.estado = ""
        this.reservas = []
    }

}
export class Reserva {
    id: string
    idMuelle: string
    dni: string
    matricula: string
    idPedido: string
    actividad: string //revisar que es
    fechaHoraReserva: Date
    tipoCamion: string

    constructor() {
        this.id = ""
        this.idMuelle = ""
        this.dni = ""
        this.matricula = ""
        this.idPedido = ""
        this.actividad = "" //revisar que es
        this.fechaHoraReserva = new Date();
        this.tipoCamion = ""
    }
}

// export enum Estado {
//     Disponible = "disponible",
// }

// export enum Horario {
//     The9001000 = "9:00-10:00",
// }

// export enum TipoCamion {
//     Trailer = "trailer",
// }

// export enum TipoMuelle {
//     Descarga = "descarga",
// }
