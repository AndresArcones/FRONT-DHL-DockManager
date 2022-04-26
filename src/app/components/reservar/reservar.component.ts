import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Pedido } from '../../interfaces/pedido';
import { MuelleService } from 'src/app/services/muelles.service';
import Swal from 'sweetalert2';
import { MatStepper } from '@angular/material/stepper';
import { MuellesReservarComponent } from '../muelles-reservar/muelles-reservar.component';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class ReservarComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;



  dni: string = ""
  matricula: string = ""
  idPedido: string = ""
  tramo: number = -1
  limpiar: boolean = false;
  tipoCamion: string = ""
  pedido: Pedido = new Pedido();


  tramos: Array<string> = ['6:00-7:00 UTC', '7:00-8:00 UTC', '8:00-9:00 UTC', '9:00-10:00 UTC', '10:00-11:00 UTC', '11:00-12:00 UTC', '12:00-13:00 UTC', '13:00-14:00 UTC']

  constructor(private _formBuilder: FormBuilder, private muelleService: MuelleService) {
    this.firstFormGroup = this._formBuilder.group({
      dni: [''],
      matricula: [''],
      idPedido: [''],
      tramo: [''],
      tipoCamion: ['']

    });

    this.secondFormGroup = this._formBuilder.group({
      idMuelle: ['', Validators.required],
    });

  }

  ngOnInit() {

  }

  setearDatos(stepper: MatStepper) {

    if (this.firstFormGroup.get('dni')?.value != "" && this.firstFormGroup.get('matricula')?.value != "" && this.firstFormGroup.get('idPedido')?.value != "" && this.firstFormGroup.get('tramo')?.value != "" && this.firstFormGroup.get('tipoCamion')?.value != "") {
      console.log("1");
      this.muelleService.mostrarPedidoId(this.firstFormGroup.get('idPedido')?.value)
        .subscribe(resp => {
          this.pedido = resp.body!;
          this.dni = this.firstFormGroup.get('dni')?.value
          this.matricula = this.firstFormGroup.get('matricula')?.value
          this.idPedido = this.firstFormGroup.get('idPedido')?.value
          this.tramo = this.firstFormGroup.get('tramo')?.value
          this.tipoCamion = this.firstFormGroup.get('tipoCamion')?.value
          console.log("2");
          MuellesReservarComponent.fireEvent.next(true);
          stepper.next();
          this.limpiar = true;
        }, err => {

          Swal.fire("Pedido", "No existe el pedido", "error");
        })


    }


  }

}
