import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  usuario: any;
  
  constructor(private fire: FirebaseService,private alerta: AlertController) { }

  ngOnInit() {
  }

  


  async mensajeError(){
    const alert = await this.alerta.create({
      header: 'Alert',
      subHeader: 'Usuario no verificado',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

}



