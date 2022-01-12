import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';

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
 
  user_id: any
  newArray!: any[]
  user:any = [];
  data:any = [];
  users!: any[];
  allUsers:any;
  constructor(private contactService:ContactService ) { }

  ngOnInit(): void {


    this.contactService.getData().subscribe((res: any[]) => {
      this.allUsers = res;
      console.log(this.allUsers)
    })

  }

}
