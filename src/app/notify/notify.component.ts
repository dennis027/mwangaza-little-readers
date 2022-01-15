import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../service/announcement.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  user:any = [];
  announces:any;
  constructor(private announcementService:AnnouncementService) { }

  ngOnInit(): void {
    this.announcementService.getData().subscribe((res:any[])=>{
      this.announces = res;
      console.log (this.announces)
    })

  }

}
