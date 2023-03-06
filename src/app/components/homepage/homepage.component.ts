import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  dataUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) { }  

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      this.dataUser = user;
    })
  }
  
  //Metodo para cerrar sesion 
  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }
}



