import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/interfaces/asignatura';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
asignaturas = []
  constructor(private fire: FirebaseService) { }

  ionViewWillEnter(){
    this.obtenerAsignaturas();
  }
  obtenerAsignaturas(){
    this.fire.getCollection<Asignatura>('asignaturasDocente').subscribe(
      (res) => {
        this.asignaturas = res;
          console.log(res)
      },
      (err) => {
        console.log("res")

      }
    )
  }
  ngOnInit() {
    this.obtenerAsignaturas();
  }

}
