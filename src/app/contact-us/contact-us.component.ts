import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { Router } from '@angular/router';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {FormBuilder,FormGroup,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
 form:any = {
   name:null,
   email:null,
   subject:null,
   message:null
 }
  constructor(private contactService:ContactService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    let {name,email,subject,message}= this.form;
    this.contactService.post(name,email,subject,message).subscribe(
      (data) => {
        console.log(data)
      },
      (err) => {
       console.log(err)
      }
    )
  }
}
