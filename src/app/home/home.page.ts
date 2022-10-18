import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Asignatura } from '../interfaces/asignatura';
import { Usuario } from '../interfaces/usuario';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  asignaturas = []
  usuarios = []
  constructor(private auth:AngularFireAuth, private fire: FirebaseService) {}

  ngOnInit(){
    this.obtenerAsignaturas();
  }
  ionViewWillEnter(){
    this.obtenerAsignaturas();
  }
  //async obtenerUsuario(){
    //const aux: Usuario = await this.auth.currentUser;
    //return aux;
  //}

  obtenerAsignaturas(){
    this.fire.getCollection<Asignatura>('asignaturas').subscribe(
      (res) => {
        this.asignaturas = res;
        //console.log(res)
      },
      (err) => {
        console.log("res")

      }
    )
  }


}
