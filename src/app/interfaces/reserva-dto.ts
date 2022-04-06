export interface ReservaDtoInt {
    id: string
    idMuelle: string,
    nombreMuelle: string
    dni: string,
    matricula: string,
    idPedido: string,
    actividad: string,
    fechaHoraReserva: Date,
    tipoCamion: string,
    tramoHora: number,
}

export class ReservaDto implements ReservaDtoInt {
    id: string
    idMuelle: string
    nombreMuelle: string
    dni: string //form
    matricula: string //form
    idPedido: string //form (6 digitos)
    actividad: string //carga o descarga
    fechaHoraReserva: Date
    tipoCamion: string
    tramoHora: number

    constructor() {
        this.id = ""
        this.idMuelle = ""
        this.nombreMuelle = ""
        this.dni = ""
        this.matricula = ""
        this.idPedido = ""
        this.actividad = ""
        this.fechaHoraReserva = new Date()
        this.tipoCamion = ""
        this.tramoHora = -1
    }
}

