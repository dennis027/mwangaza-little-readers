import { Component, Inject, OnInit } from '@angular/core';
import { PartnerInfoService } from '../service/partner-info.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TesterComponent } from '../tester/tester.component';
import { DialogData } from '../contact-info/contact-info.component';
@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css']
})
export class PartnerFormComponent implements OnInit {
  username: string;
  user_id:any;
  form:any = {
    name:null,
    subject:null,
    message:null,
    date:null,
  }
  constructor(private partnerInfoService:PartnerInfoService , public dialogRef: MatDialogRef<TesterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username'),
    this.user_id = localStorage.getItem('user_id')
    }

    onSubmit(): void {
      let {name ,subject,message,date}= this.form;
      this.partnerInfoService.post(name= this.user_id,subject,message,date).subscribe(
        (data) => {
          console.log(data)
        },
        (err) => {
          console.log(err)
        }

      )

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}