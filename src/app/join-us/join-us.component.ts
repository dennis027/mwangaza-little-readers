import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {
  toggle: boolean = true;
  constructor() {}

  toggleView(change: MatButtonToggleChange) {
     this.toggle = change.value;
  }

  

  ngOnInit(): void {
  }

}
