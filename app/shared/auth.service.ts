import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router : Router) { }

  //login
  login(email:string, password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( ()=> {
      localStorage.setItem('token','true');
      this.router.navigate(['/doua'])   //if login buna mergi la doua
    }, err=>{
      alert(err.message);
      this.router.navigate(['/login'])
    })
  }

  //register
  register(email:string, password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( ()=> {
      alert('registration successful')
      this.router.navigate(['/login'])
    }, err=>{
      alert(err.message);
      this.router.navigate(['/register'])
    })
  }



}
 