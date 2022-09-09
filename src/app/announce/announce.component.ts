import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AnnouncementService} from '../service/announcement.service'
import { TesterComponent } from '../tester/tester.component';
@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {
 username:any;
 user_id:any;
 form:any = {
   user: null,
   subject:null,
  message:null,
  location:null,
  date:null,
 }
  constructor(private router:Router,private annnouncementService:AnnouncementService,public dialogRef: MatDialogRef<TesterComponent>,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username')
    this.user_id = localStorage.getItem('user_id')
    this.username= this.user_id
  }
  onSubmit():void {
    let {user,subject,message,location,date} = this.form;
    this.annnouncementService.post(user=this.user_id,subject,message,location,date).subscribe(
      (data) =>{
        console.log(data)
        this.toastr.success('Announcement submitted Successfully');
      },(err) => {
        console.log(err)
        this.toastr.error('Check Your Details ');
      }
      );
      this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
