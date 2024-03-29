import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Muelle } from 'src/app/interfaces/muelle';
import { ReservasService } from 'src/app/services/reservas.service';
import Swal from 'sweetalert2';
import { MuelleService } from '../../services/muelles.service';
import { Matricula } from '../../interfaces/form-barrera';

@Component({
  selector: 'app-barrera',
  templateUrl: './barrera.component.html',
  styleUrls: ['./barrera.component.css']
})
export class BarreraComponent implements OnInit {

  formBarrera: FormGroup;
  matricula: FormControl = new FormControl('')



  constructor(private reservaServ: ReservasService, private activatedRoute: ActivatedRoute) {
    this.formBarrera = new FormGroup({
      matricula: this.matricula,

    });
  }

  ngOnInit(): void {
  }

  enviarMatricula() {

    let mat: Matricula = {
      "matricula": this.formBarrera.get("matricula")?.value
    }

    this.reservaServ.enviarMatricula(mat)
      .subscribe(resp => {
        if (resp.status === 200) {
          Swal.fire("Barrera", "La barrera se ha abierto", "success")
        }
      }, err => {
        Swal.fire("Barrera", "La barrera no se ha abierto", "error");
      })
  }




}
