import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simularhora',
  templateUrl: './simularhora.component.html',
  styleUrls: ['./simularhora.component.css']
})
export class SimularhoraComponent implements OnInit {

    date1: Date=new Date();

    simulacion:boolean=false;

    
    dates: Date[] | undefined;

    rangeDates: Date[]| undefined;

    minDate: Date| undefined;

    maxDate: Date| undefined;

    es: any;

    invalidDates: Array<Date>| undefined

  constructor() {
    }

  ngOnInit(): void {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = (month === 0) ? 11 : month -1;
  let prevYear = (prevMonth === 11) ? year - 1 : year;
  let nextMonth = (month === 11) ? 0 : month + 1;
  let nextYear = (nextMonth === 0) ? year + 1 : year;
  this.minDate = new Date();
  this.minDate.setMonth(prevMonth);
  this.minDate.setFullYear(prevYear);
  this.maxDate = new Date();
  this.maxDate.setMonth(nextMonth);
  this.maxDate.setFullYear(nextYear);

  let invalidDate = new Date();
  invalidDate.setDate(today.getDate() - 1);
  this.invalidDates = [today,invalidDate];
  }

  llamar(){
    var milliseconds = this.date1.getTime();
    this.simulacion=true;
    console.log(milliseconds)
  }
}
