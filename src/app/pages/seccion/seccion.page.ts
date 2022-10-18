import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.page.html',
  styleUrls: ['./seccion.page.scss'],
})
export class SeccionPage implements OnInit {
alumnos = []
  constructor(private fire: FirebaseService) { }
  ionViewWillEnter(){
    this.obtenerAlumnos();
  }
  obtenerAlumnos(){
    this.fire.getCollection<Alumno>('alumnos').subscribe(
      (res) => {
        this.alumnos = res;
          console.log(res)
      },
      (err) => {
        console.log("res")

      }
    )
  }
  ngOnInit() {
    this.obtenerAlumnos();
  }

}
