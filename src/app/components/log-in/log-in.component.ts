import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AutenticacionService } from '../../services/autenticacion.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  email: string = ""
  password: string = ""

  constructor(private auth: AutenticacionService, private router: Router) { }

  ngOnInit(): void {

  }

  logIn() {
    this.auth.logIn(this.email, this.password)
      .subscribe(resp => {
        if (resp.status === 200) {
          const token = resp.body!.token;
          localStorage.setItem("id_token", token);

          const usuario = JSON.parse(atob(token.split(".")[1])).sub;
          localStorage.setItem("usuario", usuario);

          const roles = JSON.parse(atob(token.split(".")[1])).roles;
          localStorage.setItem("roles", JSON.stringify(roles));

          Swal.fire("Login", "Bienvenido " + usuario + ", has iniciado sesión correctamente", "success")
          this.router.navigate(["/home"]);
        }
      }, err => {
        if (err.status === 403) {
          Swal.fire("Login", "Email o contraseña incorrecta", "error")
        }
        if (err.status === 401) {
          Swal.fire("Login", "Email o contraseña incorrecta", "error")
        }

      });
  }

}
