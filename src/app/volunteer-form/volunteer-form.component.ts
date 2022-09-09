import { Component, Inject, OnInit } from '@angular/core';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../contact-info/contact-info.component';
import { VolunteerInfoService } from '../service/volunteer-info.service';
import { TesterComponent } from '../tester/tester.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.css']
})
export class VolunteerFormComponent implements OnInit {
username!:any;
user_id:any;
form:any = {
  name:null,
  subject:null,
  message:null,
  date:null,
}
  constructor(private volunteerInfoService:VolunteerInfoService, public dialogRef: MatDialogRef<TesterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username'),
    this.user_id = localStorage.getItem('user_id')
  }
  onSubmit():void {
    let {name,subject,message,date} = this.form;
    this.volunteerInfoService.post (name=this.user_id,subject,message,date).subscribe(
      (data)=>{
        console.log(data)
        this.toastr.success('Forms submitted Successfully');
      },
      (err) => {
        console.log(err)
        this.toastr.error('Check Your Details');
      }
      );
      this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
