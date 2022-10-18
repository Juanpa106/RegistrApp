import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit  {

  datos: Usuario = {
    uid: null,
    email: null,
    Nombre: null,
    Password: null,
    emailVerified: null,
    Perfil: 'Alumno'
  }

  handlerMessage = '';
  roleMessage = '';
  constructor(private servicio: FirebaseService, private router:Router, private alerta:AlertController) { }

  ngOnInit() {
  }

  async registrar(email,pass){
    const user = this.servicio.registrar(email.value,pass.value)
    if(user){
      const path = 'usuarios';
      const id = (await user).uid;
      this.datos.uid = id;
      const email = (await user).email;
      this.datos.email = email;
      this.datos.Nombre = (await user).displayName;
      this.servicio.createDoc(this.datos,path,id);
      this.router.navigate(['/login'])

    }

  }

  async alertRegistro() {
    const alert = await this.alerta.create({
      header: 'USUARIO CREADO CORRECTAMENTE!',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }



}

