import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotifyComponent } from '../notify/notify.component';
import { PartnerFormComponent } from '../partner-form/partner-form.component';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
 
  openDialog(): void {
    const dialogRef = this.dialog.open( PartnerFormComponent , {
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
