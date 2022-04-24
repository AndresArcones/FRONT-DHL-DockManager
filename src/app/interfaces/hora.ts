export interface HoraInt {
    hora: Date
}


export class Hora implements HoraInt {
    hora: Date

    constructor() {
        this.hora = new Date;
    }
}