import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css']
})
export class PartnerFormComponent implements OnInit {
  username: string;
  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username')
  }

}
