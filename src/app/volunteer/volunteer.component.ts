import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotifyComponent } from '../notify/notify.component';
import { VolunteerFormComponent } from '../volunteer-form/volunteer-form.component';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open( VolunteerFormComponent , {
      width: '350px',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openDialog2(): void {
    const dialogRef = this.dialog.open( NotifyComponent , {
      width: '60%',
      // data: {name: this.name, animal: this.animal},
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
