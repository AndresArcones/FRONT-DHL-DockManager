export interface MatriculaInt {

    matricula: string
}

export class Matricula implements MatriculaInt {

    matricula: string

    constructor() {
        this.matricula = ""
    }
}