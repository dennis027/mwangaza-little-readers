import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import {PartnerInfoService} from '../service/partner-info.service'
import { VolunteerInfoService } from '../service/volunteer-info.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  panelOpenState = false;
  username: string;
  
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
  constructor(private contactService:ContactService , private partnerInfoService:PartnerInfoService , private volunteerInfoService:VolunteerInfoService) { }

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

}
