import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Muelle } from 'src/app/interfaces/muelle';
import Swal from 'sweetalert2';
import { MuelleService } from '../../services/muelles.service';

@Component({
  selector: 'app-barrera',
  templateUrl: './barrera.component.html',
  styleUrls: ['./barrera.component.css']
})
export class BarreraComponent implements OnInit {

  formBarrera: FormGroup;
  matricula: FormControl = new FormControl('')

  constructor(private muelleSer: MuelleService, private activatedRoute: ActivatedRoute) { 
    this.formBarrera = new FormGroup({
      matricula: this.matricula,

    });
  }

  ngOnInit(): void {
  }

}
