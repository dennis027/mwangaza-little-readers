import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import {PartnerInfoService} from '../service/partner-info.service'
import { VolunteerInfoService } from '../service/volunteer-info.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AnnounceComponent } from '../announce/announce.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  panelOpenState = false;
  username!: any;
  
  public search:any = '';
    userSearch: any[] = [];
  partners:any;
  user_id: any
  newArray!: any[]
  user:any = [];
  data:any = [];
  users!: any[];
  allUsers:any;
  volunteers:any;
  constructor(private contactService:ContactService , private partnerInfoService:PartnerInfoService , private volunteerInfoService:VolunteerInfoService,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.username = localStorage.getItem('username')
    this.contactService.getData().subscribe((res: any[]) => {
      this.allUsers = res;
      console.log(this.allUsers)
    })


    this.partnerInfoService.getData().subscribe((res:any[])=>{
      this.partners = res;
      console.log (this.partners)
    })

    this.volunteerInfoService.getData().subscribe((res:any[])=>{
      this.volunteers = res;
      console.log (this.volunteers)
    })


  }
  openDialog(): void {
    const dialogRef = this.dialog.open( AnnounceComponent , {
      width: '350px',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
