import { Component, OnInit } from '@angular/core';
import { RegisterUsuarioDto } from 'src/app/interfaces/register-Usuario-Dto';
import Swal from 'sweetalert2';
import { RegisterService } from '../../services/register.service';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUsuario: RegisterUsuarioDto = new RegisterUsuarioDto();
  
  
  constructor(private regService: RegisterService, private auth: AutenticacionService) {
    
   }

  ngOnInit(): void {
    
  }

  register(){
    this.regService.register(this.newUsuario)
    .subscribe(resp =>{
      if(resp.status === 201){
        Swal.fire("Register", "Succesfully Registered", "success");
        //this.auth.logIn(this.newUsuario.usuario, this.newUsuario.contrasenia);
      }
    }, err=>{
      Swal.fire("Registro", err.error.message, "error");
    })
  }

}
