import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUsuario: FormGroup;

  //Formulario de Login 
  constructor(
    private formulario: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router) {
    this.loginUsuario = this.formulario.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  login() {
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      this.toastr.success('Email y Password Correctos!', 'Login Correcto!');
      this.router.navigate(['/homepage'])
      console.log(user);
    }).catch((error) => {
      console.log(error);
      this.toastr.error(this.firebaseError(error.code), 'Error!');
    })
  }

  //Captura de errores para mostrar  en pantalla

  firebaseError(code: string) {
    switch (code) {
      case 'auth/wrong-password':
        return 'Contraseña incorrecta.';
      case 'auth/user-not-found':
        return 'Email incorrecto.';
      case 'auth/invalid-email':
        return 'Email con formato incorrecto';
      case 'auth/internal-error':
        return 'Ingrese una contraseña';
      default:
        return 'Error Deconocido!';
    }
  }
}
