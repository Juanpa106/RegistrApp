import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
import { Usuario } from '../interfaces/usuario';

import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public afAuth: AngularFireAuth,private auth: AngularFireAuth, private database: AngularFirestore, private loading:LoadingController, private toastcontroller:ToastController) { }

  createDoc(data: any, path: string, id: string) {
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);
}

getDoc<tipo>(path: string, id: string) {
  const collection = this.database.collection<tipo>(path);
  return collection.doc(id).valueChanges();
}

deleteDoc(path: string, id: string) {
  const collection = this.database.collection(path);
  return collection.doc(id).delete();
}

getId() {
  return this.database.createId();
}

getCollection<tipo>(path: string) {
  const collection = this.database.collection<tipo>(path);
  return collection.valueChanges();
}

async mensaje(mensaje: string) {
  const toast = await this.toastcontroller.create({
    message: mensaje,
    duration: 1500,
    //position: 'top' | 'middle' | 'bottom'
  });

  await toast.present();
}

loadingAux: any;

async cargarLoading(mensaje: string) {
  this.loadingAux = await this.loading.create({
    cssClass: 'my-custom-class',
    message: mensaje,
    //duration: 2000
  });

  await this.loadingAux.present();
}

async cerrarLoading() {
  await this.loadingAux.dismiss();
}


async logout(){
  await this.auth.signOut();
}

async login(correo: string, pass:string){
  const { user } = await this.auth.signInWithEmailAndPassword(correo, pass) 
  return user;
}


async registrar(correo: string, pass:string){
  const { user } = await this.auth.createUserWithEmailAndPassword(correo, pass) 
  await this.verificacion();
  return user;
}

async verificacion(){
  return (await this.auth.currentUser).sendEmailVerification();
}

async recuperar(correo: string){
  return this.auth.sendPasswordResetEmail(correo);
}

async obtenerEmail(){
  return (await this.auth.currentUser).email;
}






}
