import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from 'src/app/interfaces/asignatura';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  asignatura : Object
  id: Object


    constructor(private activatedRoute: ActivatedRoute,private fire: FirebaseService) { }

  ngOnInit() {
   this.activatedRoute.paramMap.subscribe(paramMap => {
    
    this.id = paramMap.get('id')
    console.log(paramMap.get('id'))
    this.obtenerAsignatura(paramMap.get('id'));
   })
  }

  
  obtenerAsignatura(ide){
    this.fire.getDoc<Asignatura>(('asignaturas'),(ide)).subscribe(
      (res) => {
        this.asignatura = res;
        
        console.log(res)
      },
      (err) => {
        
  
      }
    )
  }




}
