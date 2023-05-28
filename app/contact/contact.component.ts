import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Firestore,collection,addDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  implements OnInit {

  contactForm!: FormGroup;
  isSubmit=true;
  submitMesaj='';

constructor(private formBuilder:FormBuilder,private firestore:Firestore){}


ngOnInit(){
  this.contactForm=this.formBuilder.group({
    nume:[null,Validators.required],
    email:[null,[Validators.required,Validators.email]],
    mesaj:[null,Validators.required],
    subiect:[null,Validators.required],
  })
}

submitData(value:any){

let $contactRef=collection(this.firestore,"contact");

addDoc($contactRef,value)
.then(()=>{
this.submitMesaj='Trimis cu succes!';
})
.catch(err=>{
  console.log(err);
})
  this.isSubmit=true;

setTimeout(()=>{
  this.isSubmit=false;
},8000);
}

}
