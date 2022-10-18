import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GithubAuthProvider, GoogleAuthProvider } from '@firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router:Router) { }

  googleAuth(){
    return this.authLogin(new GoogleAuthProvider)
  }

  authLogin(provider: any){
    return this.auth.signInWithPopup(provider).then(result => {
      console.log('success',result);
      this.router.navigate(['/home'])
    }).catch((error) => {
      console.log(error)
    })  ;
  }


  gitAuth(){
    return this.authLoginGit(new GithubAuthProvider)   
  }

  authLoginGit(provider: any){
    return this.auth.signInWithPopup(provider).then(result => {
      console.log('success',result);
      this.router.navigate(['/home'])
    }).catch((error) => {
      console.log(error)
    })  ;
  }

  async logOut(){
    this.auth.signOut();
  }




 

 



}
