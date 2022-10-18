import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private servicio: FirebaseService, private router:Router, private auth:AuthService) { }

  ngOnInit() {
  }

  async login(email, pass){
    const user = this.servicio.login(email.value,pass.value)
    if((await user).email){
      this.router.navigate([''])      
    }
  }

  async register(){
    this.router.navigate(['/registro'])
  }

  googleAuth(){
    this.auth.googleAuth();
  }

  gitAuth(){
    this.auth.gitAuth();
  }



}
