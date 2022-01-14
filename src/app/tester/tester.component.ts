import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { PartnerFormComponent } from '../partner-form/partner-form.component';
import { VolunteerFormComponent } from '../volunteer-form/volunteer-form.component';



@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
  
  // animal: string;
  // name: string;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open( VolunteerFormComponent , {
      width: '100%',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
